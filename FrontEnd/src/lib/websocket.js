import { io } from 'socket.io-client'
import { config } from './config'

// Socket.IO configuration - connect directly to backend in development, via proxy in production
const SOCKET_URL = config.api.wsUrl

console.log(`🔧 WebSocket Mode: ${config.isDevelopment ? 'Development (Direct Backend)' : 'Production (Proxy)'}`)
console.log(`🔗 WebSocket URL: ${SOCKET_URL}`)

class SocketIOClient {
  constructor(options = {}) {
    this.options = {
      autoReconnect: true,
      maxReconnectAttempts: 5,
      reconnectDelay: 5000,
      pingInterval: 30000, // 30 seconds
      pongTimeout: 5000,   // 5 seconds
      ...options
    }
    this.socket = null
    this.reconnectAttempts = 0
    this.reconnectTimeout = null
    this.pingInterval = null
    this.pongTimeout = null
    this.healthCheckInterval = null
    this._isConnecting = false
    this.isManualClose = false
    this.connectionPromise = null
    this.eventListeners = new Map()
  }


  async connect() {
    // If already connected, return existing promise
    if (this.socket?.connected) {
      return Promise.resolve()
    }

    // If connecting, return the existing promise
    if (this._isConnecting && this.connectionPromise) {
      return this.connectionPromise
    }

    this._isConnecting = true
    this.isManualClose = false

    this.connectionPromise = this._connect()

    try {
      await this.connectionPromise
    } finally {
      this.connectionPromise = null
    }
  }


  // Method to reconnect (disconnect and connect again)
  async reconnect() {
    console.log('🔄 Reconnecting...')

    // Disconnect current connection
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }

    // Reset connection state
    this._isConnecting = false
    this.reconnectAttempts = 0
    this.isManualClose = false

    // Clear any existing timeouts
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout)
      this.reconnectTimeout = null
    }

    // Stop intervals
    this.stopPingInterval()
    this.stopHealthCheck()

    // Connect again
    await this.connect()
  }

  async _connect() {
    try {
      // Log cookie information for debugging
      // console.log('🔍 Checking cookies before authenticated connection...')
      // try {
      //   const cookieCheck = await fetch('/api/auth/check', {
      //     method: 'GET',
      //     credentials: 'include',
      //   })
      //   const cookieData = await cookieCheck.json()
      //   console.log('🍪 Cookie check result:', cookieData)
      // } catch (error) {
      //   console.log('🔍 Cookie check failed:', error)
      // }

      // Connect to backend Socket.IO server with cookie-based authentication
      this.socket = io(SOCKET_URL, {
        transports: ['websocket', 'polling'],
        autoConnect: false,
        reconnection: false, // We'll handle reconnection manually
        reconnectionAttempts: 0, // Disable built-in reconnection attempts
        reconnectionDelay: 0, // Disable built-in reconnection delay
        timeout: 5000, // Reduced timeout for faster anonymous connections
        withCredentials: true, // Enable sending cookies (contains platform token)
      })

      this.socket.on('connect', () => {
        console.log('🔌 Socket.IO connected to backend')
        this._isConnecting = false
        this.reconnectAttempts = 0

        // Start ping interval and health check
        // this.startPingInterval()
        this.startHealthCheck()

        // Emit connect event to listeners
        this.emitToListeners('connect', {})
        
        // Call onOpen callback
        this.options.onOpen?.()
      })

      this.socket.on('disconnect', (reason) => {
        console.log('🔌 Socket.IO disconnected:', reason)
        this._isConnecting = false
        this.stopPingInterval()
        this.stopHealthCheck()

        // Emit disconnect event to listeners
        this.emitToListeners('disconnect', { reason })

        // Call onClose callback
        this.options.onClose?.(0, reason)

        // Note: Reconnection is now handled by the WebSocket context, not here
        // This prevents conflicts between built-in and custom reconnection logic
      })

      this.socket.on('connect_error', (error) => {
        this._isConnecting = false

        // Emit reconnect event to listeners
        this.emitToListeners('reconnect', { error })

        // Call onError callback
        this.options.onError?.(error)

        // Note: Reconnection is now handled by the WebSocket context, not here
        // This prevents conflicts between built-in and custom reconnection logic
      })

      this.socket.on('auth_error', (data) => {
        console.log('🔐 Auth error received:', data)
        this.options.onMessage?.({
          type: 'auth_error',
          ...data
        })
        this.emitToListeners('auth_error', data)
        
        // Don't attempt to reconnect on auth errors - let the app handle it
        if (data.code === 'INVALID_TOKEN' || data.code === 'AUTH_ERROR') {
          console.log('🛑 Auth failed - stopping auto-reconnection to prevent infinite loop')
          // Don't disconnect, but stop auto-reconnection for auth errors
          // The backend will fallback to anonymous connection
        }
      })

      // Handle specific events
      this.socket.on('pong', (data) => {
        this.handlePong()
        this.emitToListeners('pong', data)
      })

      this.socket.on('auth_success', (data) => {
        this.options.onMessage?.({
          type: 'auth_success',
          ...data
        })
        this.emitToListeners('auth_success', data)
      })

      this.socket.on('chat', (data) => {
        this.emitToListeners('chat', data)
      })


      this.socket.on('error', (data) => {
        this.options.onMessage?.({
          type: 'error',
          ...data
        })
        this.emitToListeners('error', data)
      })

      // Set up any stored event listeners (but exclude events we already handle above)
      this.setupStoredEventListeners()

      // Connect the socket
      this.socket.connect()

    } catch (error) {
      this._isConnecting = false
    }
  }


  emitToListeners(event, data) {
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      listeners.forEach(listener => {
        try {
          listener(data)
        } catch (error) {
          console.log(`Error in event listener for ${event}:`, error)
        }
      })
    }
  }

  setupStoredEventListeners() {
    if (!this.socket) return

    // Events that are already handled directly by the socket
    const handledEvents = ['pong', 'auth_success', 'error']

    // Set up any stored event listeners on the actual socket
    for (const [event, listeners] of this.eventListeners.entries()) {
      // Skip events that are already handled directly
      if (handledEvents.includes(event)) {
        console.log(`🔌 Skipping ${event} - already handled directly`)
        continue
      }

      listeners.forEach(listener => {
        this.socket.on(event, listener)
      })
    }
  }

  disconnect() {
    this.isManualClose = true
    this.stopPingInterval()
    this.stopHealthCheck()

    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout)
      this.reconnectTimeout = null
    }

    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }

    // Don't clear event listeners - they should persist for reconnection
    // this.eventListeners.clear()
  }

  send(message) {
    if (!this.socket || !this.socket.connected) {
      console.log('Socket.IO is not connected')
      return
    }

    try {
      const { type, ...data } = message
      this.socket.emit(type, data)
    } catch (error) {
      console.log('Failed to send Socket.IO message:', error)
      throw error
    }
  }

  emit(event, data) {
    if (!this.socket || !this.socket.connected) {
      console.log('Socket.IO is not connected')
      return
    }

    try {
      this.socket.emit(event, data)
    } catch (error) {
      console.log('Failed to emit Socket.IO event:', error)
      throw error
    }
  }

  on(event, callback) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set())
    }
    this.eventListeners.get(event).add(callback)
    
    // If socket exists, attach the listener directly
    if (this.socket) {
      this.socket.on(event, callback)
    }
  }

  off(event, callback) {
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      if (callback) {
        listeners.delete(callback)
        // Remove from socket if it exists
        if (this.socket) {
          this.socket.off(event, callback)
        }
      } else {
        this.eventListeners.delete(event)
        // Remove all listeners for this event from socket
        if (this.socket) {
          this.socket.off(event)
        }
      }
    }
  }

  sendPing() {
    this.emit('ping', { timestamp: Date.now() })
  }

  scheduleReconnect() {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout)
    }

    // Cap the delay at 30 seconds to avoid extremely long delays
    const maxDelay = 30000
    const delay = Math.min(
      this.options.reconnectDelay * Math.pow(2, this.reconnectAttempts),
      maxDelay
    )

    console.log(`🔄 Scheduling Socket.IO reconnect in ${delay}ms (attempt ${this.reconnectAttempts + 1})`)

    this.reconnectTimeout = setTimeout(() => {
      this.reconnectAttempts++
      this.connect().catch(error => {
        console.log('Reconnect failed:', error)
        // Continue trying to reconnect even after max attempts
        if (!this.isManualClose && this.options.autoReconnect) {
          this.scheduleReconnect()
        }
      })
    }, delay)
  }

  startPingInterval() {
    if (this.options.pingInterval && this.options.pingInterval > 0) {
      this.pingInterval = setInterval(() => {
        this.sendPing()
        this.startPongTimeout()
      }, this.options.pingInterval)
    }
  }

  stopPingInterval() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval)
      this.pingInterval = null
    }

    if (this.pongTimeout) {
      clearTimeout(this.pongTimeout)
      this.pongTimeout = null
    }
  }

  startHealthCheck() {
    // Health check disabled - connection should be persistent
    console.log('🔍 Health check disabled - maintaining persistent connection')
  }

  // Public method to manually trigger reconnection
  forceReconnect() {
    if (this.isManualClose) {
      console.log('Cannot force reconnect - connection was manually closed')
      return
    }

    console.log('🔄 Force reconnecting...')
    this.reconnectAttempts = 0 // Reset attempts for manual reconnect
    this.scheduleReconnect()
  }

  // Public method to simulate disconnection for testing
  simulateDisconnect() {
    if (this.socket && this.socket.connected) {
      console.log('🔌 Simulating disconnect for testing')
      this.socket.disconnect()
    }
  }

  stopHealthCheck() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval)
      this.healthCheckInterval = null
    }
  }

  startPongTimeout() {
    if (this.pongTimeout) {
      clearTimeout(this.pongTimeout)
    }

    this.pongTimeout = setTimeout(() => {
      console.warn('⚠️ Pong timeout - closing connection')
      // this.socket?.disconnect()
    }, this.options.pongTimeout)
  }

  handlePong() {
    if (this.pongTimeout) {
      clearTimeout(this.pongTimeout)
      this.pongTimeout = null
    }
  }

  // Get connection status
  get readyState() {
    if (!this.socket) return 3 // CLOSED
    return this.socket.connected ? 1 : 3 // OPEN or CLOSED
  }

  get isConnected() {
    return this.socket?.connected ?? false
  }

  get isConnecting() {
    return this._isConnecting
  }

  get wasManuallyClosed() {
    return this.isManualClose
  }

  get currentReconnectAttempts() {
    return this.reconnectAttempts
  }

  get autoReconnectEnabled() {
    return this.options.autoReconnect ?? true
  }

  get hasSocket() {
    return this.socket !== null
  }

  // Public method to add event listeners to the underlying socket
  onSocketEvent(event, callback) {
    // Events that are already handled directly by the socket
    const handledEvents = ['pong', 'auth_success', 'error']

    if (this.socket) {
      // For handled events, add directly to socket since we need to override the internal handling
      if (handledEvents.includes(event)) {
        this.socket.on(event, callback)
      } else {
        // For other events, add directly to socket
        this.socket.on(event, callback)
      }
    } else {
      // If socket doesn't exist yet, store the listener to be added when socket is created
      if (!this.eventListeners.has(event)) {
        this.eventListeners.set(event, new Set())
      }
      this.eventListeners.get(event).add(callback)
    }
  }

  // Public method to remove event listeners from the underlying socket
  offSocketEvent(event, callback) {
    // Events that are already handled directly by the socket
    const handledEvents = ['pong', 'auth_success', 'error']

    if (this.socket) {
      // For handled events, we need to remove all listeners since they're managed internally
      if (handledEvents.includes(event)) {
        // Remove all listeners for this event from the socket
        this.socket.off(event)
      } else {
        // For other events, remove specific callback or all if no callback provided
        this.socket.off(event, callback)
      }
    }

    // Remove from stored listeners
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      if (callback) {
        listeners.delete(callback)
      } else {
        this.eventListeners.delete(event)
      }
    }
  }

  // Public method to re-register all stored event listeners
  reRegisterEventListeners() {
    if (this.socket) {
      console.log('🔌 Re-registering all event listeners')
      this.setupStoredEventListeners()
    }
  }
}

// Create a singleton Socket.IO client instance
const socketClient = new SocketIOClient()

// Export the singleton instance
export { socketClient as SocketIOClient }

// Export convenience functions
export const connectWebSocket = () => socketClient.connect()
export const disconnectWebSocket = () => socketClient.disconnect()
export const reconnectWebSocket = () => socketClient.reconnect()
export const sendWebSocketMessage = (message) => socketClient.send(message)
export const emitSocketEvent = (event, data) => socketClient.emit(event, data)
export const onSocketEvent = (event, callback) => socketClient.on(event, callback)
export const offSocketEvent = (event, callback) => socketClient.off(event, callback)
export const getWebSocketStatus = () => ({
  readyState: socketClient.readyState,
  isConnected: socketClient.isConnected,
  isConnecting: socketClient.isConnecting
})
