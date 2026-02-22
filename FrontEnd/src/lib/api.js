import axios from 'axios'
import config, { logConfig } from './config'

// Use configuration for API base URL
const API_BASE_URL = config.api.baseUrl

// Log configuration in development mode
logConfig()

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include cookies in all requests
})

// Request interceptor - ensure cookies are sent with all requests
apiClient.interceptors.request.use(
  async (requestConfig) => {
    // Always send cookies with requests (they contain the platform token)
    requestConfig.withCredentials = true

    return requestConfig
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle auth errors
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    // Handle 401 errors (unauthorized) - but not for auth check endpoints
    if (error.response?.status === 401) {
      const url = error.config?.url || ''

      // Don't redirect for auth check endpoints - these are expected to return 401 for anonymous users
      if (url.includes('/auth/check')) {
        console.log('🔐 Auth check returned 401 - user is anonymous')
        return Promise.reject(new Error('Not authenticated'))
      }

      // Check if logout is already in progress to prevent multiple calls
      if (typeof window !== 'undefined' && sessionStorage.getItem('logout_in_progress')) {
        console.log('🔐 Logout already in progress, skipping')
        return Promise.reject(new Error('Authentication expired'))
      }

      // Don't redirect for token exchange endpoints - these should fail silently
      if (url.includes('/auth/exchange')) {
        console.log('🔐 Token exchange failed - clearing stored tokens')
        // Clear stored tokens to prevent infinite loop
        if (typeof window !== 'undefined') {
          // Set flag to prevent multiple logout calls
          sessionStorage.setItem('logout_in_progress', 'true')
          
          // Clear cookies by calling logout endpoint
          try {
            await apiClient.post('/auth/logout')
          } catch (logoutError) {
            // Ignore logout errors
          }
          // Clear localStorage/sessionStorage if any
          localStorage.removeItem('supabase.auth.token')
          sessionStorage.clear()
        }
        return Promise.reject(new Error('Token exchange failed'))
      }

      // For other endpoints, don't automatically redirect
      // Let the components handle authentication errors appropriately
      // This prevents redirecting authenticated users who might just have a temporary token issue
      console.log('🔐 API returned 401 for endpoint:', url)
      console.log('🔍 Current path:', typeof window !== 'undefined' ? window.location.pathname : 'N/A')
      
      // Just reject the error - let the calling component handle it
      // Components can check auth status and redirect if needed
      return Promise.reject(new Error('Not authenticated'))
    }

    return Promise.reject(error)
  }
)

// Helper function to handle API responses
const handleApiResponse = (response) => {
  // Normalize response to expected format
  // Both direct backend and Next.js proxy return raw data
  // We need to wrap it in { success: true, data: ... } format
  return {
    success: true,
    data: response.data
  }
}

// Helper function to handle API errors
const handleApiError = (error) => {
  console.error('API request failed:', error)

  if (error.response?.data?.error) {
    return {
      success: false,
      error: error.response.data.error
    }
  }

  if (error.message) {
    return {
      success: false,
      error: error.message
    }
  }

  return {
    success: false,
    error: 'Unknown error occurred'
  }
}

// Debounce utility for auth checks
let authCheckPromise = null
let lastAuthCheck = 0
let lastAuthResult = null
const AUTH_CHECK_DEBOUNCE = 2000 // 2 second debounce

// Cookie-based authentication utilities
export const authUtils = {
  // Check if user is authenticated by making a request to the backend
  isAuthenticated: async () => {
    const now = Date.now()
    
    // If we have a recent auth check, return the cached result
    if (authCheckPromise && (now - lastAuthCheck) < AUTH_CHECK_DEBOUNCE) {
      console.log('🔄 Using cached auth check result')
      return authCheckPromise
    }
    
    // If we have a very recent result and it was false (not authenticated), return it immediately
    if (lastAuthResult === false && (now - lastAuthCheck) < 500) {
      console.log('🔄 Using recent false auth result')
      return false
    }
    
    // Create new auth check promise
    authCheckPromise = (async () => {
      try {
        lastAuthCheck = now
        console.log('🔐 Making new auth check request')
        const response = await apiClient.get('/auth/check')
        const result = response.status === 200 && response.data?.success === true
        lastAuthResult = result
        return result
      } catch (error) {
        // 401 is expected for anonymous users, so return false without logging error
        if (error?.response?.status === 401) {
          lastAuthResult = false
          return false
        }
        console.error('❌ Auth check failed:', error)
        lastAuthResult = false
        return false
      } finally {
        // Clear the promise after completion
        setTimeout(() => {
          authCheckPromise = null
        }, AUTH_CHECK_DEBOUNCE)
      }
    })()
    
    return authCheckPromise
  },

  // Exchange Supabase token for platform JWT
  exchangeToken: async (supabaseToken) => {
    try {
      const response = await apiClient.post('/auth/exchange', { token: supabaseToken })
      return handleApiResponse(response)
    } catch (error) {
      return handleApiError(error)
    }
  },

  // Logout by calling the backend logout endpoint
  logout: async () => {
    try {
      await apiClient.post('/auth/logout')
      console.log('✅ Logged out successfully')
    } catch (error) {
      console.error('❌ Logout failed:', error)
    }
  },


}

// Game-specific API methods
export const gameApi = {
  // Coinflip game
  coinflip: {
    getConfig: async () => {
      try {
        const response = await apiClient.get('/coinflip/config')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    createGame: async (data) => {
      try {
        const response = await apiClient.post('/coinflip/create', data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    joinGame: async (gameId, data) => {
      try {
        const response = await apiClient.post(`/coinflip/game/${gameId}/join`, data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getGameState: async (gameId) => {
      try {
        const response = await apiClient.get(`/coinflip/game/${gameId}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getPublicGameState: async (gameId) => {
      try {
        const response = await apiClient.get(`/coinflip/game/${gameId}/public`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getPlayerGames: async () => {
      try {
        const response = await apiClient.get('/coinflip/games')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getUserGames: async (params) => {
      try {
        const response = await apiClient.get('/coinflip/my-games', {
          params: params || {}
        })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getRecentFlips: async (params = {}) => {
      try {
        const { limit = 10 } = params
        const response = await apiClient.get('/coinflip/recent', {
          params: { limit }
        })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getOnlinePlayers: async () => {
      try {
        const response = await apiClient.get('/coinflip/players')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getPlayerStatistics: async () => {
      try {
        const response = await apiClient.get('/coinflip/statistics')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    cancelGame: async (gameId) => {
      try {
        const response = await apiClient.delete(`/coinflip/game/${gameId}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    verifyGame: async (data) => {
      try {
        const response = await apiClient.post('/coinflip/verify', data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },
  },

  // Crash game
  crash: {
    getConfig: async () => {
      try {
        const response = await apiClient.get('/crash/config')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    placeBet: async (data) => {
      try {
        const response = await apiClient.post('/crash/bet', data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    cashOut: async () => {
      try {
        const response = await apiClient.post('/crash/cashout')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getGameHistory: async (params = {}) => {
      try {
        const { limit = 10 } = params
        const response = await apiClient.get('/crash/history', {
          params: { limit }
        })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getPlayerBets: async () => {
      try {
        const response = await apiClient.get('/crash/bets')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getPlayerStatistics: async () => {
      try {
        const response = await apiClient.get('/crash/statistics')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getCurrentGame: async () => {
      try {
        const response = await apiClient.get('/crash/current')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getHistory: async (params = {}) => {
      try {
        const response = await apiClient.get('/crash/history', {
          params
        })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getStats: async () => {
      try {
        const response = await apiClient.get('/crash/stats')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getUserGames: async (params = {}) => {
      try {
        const response = await apiClient.get('/crash/user-games', {
          params
        })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    verifyGame: async (data) => {
      try {
        const response = await apiClient.post('/crash/verify', data)
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getPlayerGames: async () => {
      try {
        const response = await apiClient.get('/crash/games')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },
  },
  // Roulette game
  roulette: {
    getCurrentGame: async () => {
      try {
        const response = await apiClient.get('/roulette/current')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    placeBet: async (betAmount, betType) => {
      try {
        const response = await apiClient.post('/roulette/bet', { betAmount, betType })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getHistory: async (params = {}) => {
      try {
        const response = await apiClient.get('/roulette/history', {
          params
        })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getStats: async () => {
      try {
        const response = await apiClient.get('/roulette/stats')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getUserGames: async (params) => {
      try {
        const response = await apiClient.get('/roulette/my-games', {
          params: params || {}
        })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    verifyGame: async (data) => {
      try {
        const response = await apiClient.post('/roulette/verify', data)
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },
  },

  // Mine game
  mine: {
    getConfig: async () => {
      try {
        const response = await apiClient.get('/mine/config')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    createGame: async (data) => {
      try {
        const response = await apiClient.post('/mine/create', data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getGameState: async (gameId) => {
      try {
        const response = await apiClient.get(`/mine/game/${gameId}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getPublicGameState: async (gameId) => {
      try {
        const response = await apiClient.get(`/mine/game/${gameId}/public`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getPlayerGames: async () => {
      try {
        const response = await apiClient.get('/mine/games')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    deleteGame: async (gameId) => {
      try {
        const response = await apiClient.delete(`/mine/game/${gameId}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    cashOut: async (gameId) => {
      try {
        const response = await apiClient.post(`/mine/game/${gameId}/cashout`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getHistory: async (params = {}) => {
      try {
        const response = await apiClient.get('/mine/history', {
          params
        })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getStats: async () => {
      try {
        const response = await apiClient.get('/mine/stats')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getIncompleteGames: async () => {
      try {
        const response = await apiClient.get('/mine/incomplete')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    verifyGame: async (data) => {
      try {
        const response = await apiClient.post('/mine/verify', data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },
  },

  // Transaction management
  transaction: {
    getHistory: async (params = {}) => {
      try {
        const response = await apiClient.get('/transaction/history-page', {
          params
        })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getStats: async () => {
      try {
        const response = await apiClient.get('/transaction/stats-page')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getTransactionByRef: async (ref) => {
      try {
        const response = await apiClient.get(`/transaction/ref/${ref}`)
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },
  },

  // User profile
  user: {
    getStatistics: async () => {
      try {
        const response = await apiClient.get('/user/statistics')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },
    getProfile: async () => {
      try {
        const response = await apiClient.get('/user/profile')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    updateProfile: async (data) => {
      try {
        const response = await apiClient.put('/user/profile', data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    uploadAvatar: async (formData) => {
      try {
        // First upload to Pinata via Next.js API
        const uploadResponse = await fetch('/api/upload-avatar', {
          method: 'POST',
          body: formData,
          credentials: 'include'
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload file to Pinata');
        }

        const uploadResult = await uploadResponse.json();

        if (!uploadResult.success || !uploadResult.data?.avatar) {
          throw new Error('Failed to get IPFS URL from upload');
        }

        // Then update the user profile in the backend with the new avatar URL
        const response = await apiClient.put('/user/profile', {
          avatar: uploadResult.data.avatar
        });

        return handleApiResponse(response.data);
      } catch (error) {
        return handleApiError(error);
      }
    },

    regenerateSeed: async () => {
      try {
        const response = await apiClient.post('/user/regenerate-seed');
        return handleApiResponse(response);
      } catch (error) {
        return handleApiError(error);
      }
    },
  },

  // Admin/Cron management
  admin: {
    getCronStatus: async ()=> {
      try {
        const response = await apiClient.get('/cron/status')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    triggerChatCleanup: async ()=> {
      try {
        const response = await apiClient.post('/cron/trigger-chat-cleanup')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },
  },

  // Chat API
  chat: {
    getMessages: async (params = {}) => {
      try {
        const { room = 'default', page = 1, limit = 50 } = params
        const response = await apiClient.get('/chat/messages', {
          params: { room, page, limit }
        })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getChatStatistics: async (room = 'default') => {
      try {
        const response = await apiClient.get('/chat/stats', {
          params: { room }
        })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getOnlineUsers: async ()=> {
      try {
        const response = await apiClient.get('/chat/online')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    getUserChatHistory: async (params = {}) => {
      try {
        const { room = 'default', page = 1, limit = 20 } = params
        const response = await apiClient.get('/chat/history', {
          params: { room, page, limit }
        })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    searchMessages: async (params) => {
      try {
        const { q, room = 'default', page = 1, limit = 20 } = params
        const response = await apiClient.get('/chat/search', {
          params: { q, room, page, limit }
        })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    deleteMessage: async (messageId) => {
      try {
        const response = await apiClient.delete(`/chat/${messageId}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },
  },

  // XP API methods
  xp: {
    // Get user's XP information
    getUserXP: async ()=> {
      try {
        const response = await apiClient.get('/xp/user')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get user achievements
    getUserAchievements: async ()=> {
      try {
        const response = await apiClient.get('/xp/achievements')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get level leaderboard
    getLevelLeaderboard: async (limit = 10) => {
      try {
        const response = await apiClient.get(`/xp/leaderboard/level?limit=${limit}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get wagering leaderboard
    getWageringLeaderboard: async (limit = 10) => {
      try {
        const response = await apiClient.get(`/xp/leaderboard/wagering?limit=${limit}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get weekly wagering leaderboard
    getWeeklyWageringLeaderboard: async (limit = 10) => {
      try {
        const response = await apiClient.get(`/xp/leaderboard/weekly-wagering?limit=${limit}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get leaderboard (generic method for both types)
    getLeaderboard: async (endpoint, limit = 10) => {
      try {
        const response = await apiClient.get(`${endpoint}?limit=${limit}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get XP requirements for levels
    getXPRequirements: async (maxLevel = 50) => {
      try {
        const response = await apiClient.get(`/xp/requirements?maxLevel=${maxLevel}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    }
  },

  // Game History API methods
  history: {
    // Get user's game history with filters
    getGameHistory: async (filters = {}) => {
      try {
        const params = new URLSearchParams();
        if (filters.gameType) params.append('gameType', filters.gameType);
        if (filters.result) params.append('result', filters.result);
        if (filters.startDate) params.append('startDate', filters.startDate);
        if (filters.endDate) params.append('endDate', filters.endDate);
        if (filters.page) params.append('page', filters.page.toString());
        if (filters.limit) params.append('limit', filters.limit.toString());

        const response = await apiClient.get(`/game-history/user?${params.toString()}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get game history statistics
    getGameHistoryStats: async (filters = {}) => {
      try {
        const params = new URLSearchParams();
        if (filters.gameType) params.append('gameType', filters.gameType);
        if (filters.startDate) params.append('startDate', filters.startDate);
        if (filters.endDate) params.append('endDate', filters.endDate);

        const response = await apiClient.get(`/game-history/user/stats?${params.toString()}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get daily playing statistics for charts
    getDailyStats: async (days = 30) => {
      try {
        const response = await apiClient.get(`/game-history/user/daily-stats?days=${days}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    }
  },

  // Payment API methods
  payment: {
    // Create payment user
    createPaymentUser: async ()=> {
      try {
        const response = await apiClient.post('/payment/user/create')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Create wallet
    createWallet: async (chainId, tokenId) => {
      try {
        const response = await apiClient.post('/payment/user/wallet', {
          chainId,
          tokenId
        })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get wallet addresses
    getWalletAddresses: async (chainIds) => {
      try {
        const params = chainIds ? { chainIds } : {}
        const response = await apiClient.get('/payment/user/wallets', { params })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Process withdrawal
    processWithdrawal: async (data) => {
      try {
        const response = await apiClient.post('/payment/user/withdraw', data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get transactions
    getTransactions: async (params) => {
      try {
        const response = await apiClient.get('/payment/user/transactions', { params })
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get transaction statistics
    getTransactionStats: async ()=> {
      try {
        const response = await apiClient.get('/payment/user/stats')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get supported assets
    getSupportedAssets: async ()=> {
      try {
        const response = await apiClient.get('/payment/assets')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },
  },

  // Game Status API methods
  gameStatus: {
    // Get active player counts for all games
    getActivePlayerCounts: async ()=> {
      try {
        const response = await apiClient.get('/game-status/active-players')
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get active player count for a specific game type
    getGamePlayerCount: async (gameType) => {
      try {
        const response = await apiClient.get(`/game-status/active-players/${gameType}`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    }
  },

  // Feature Trading API methods
  featureTrading: {
    // Get all trading markets
    getMarkets: async ()=> {
      try {
        const response = await apiClient.get('/feature-trading/markets')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get specific market data
    getMarketData: async (symbol) => {
      try {
        const response = await apiClient.get(`/feature-trading/markets/${symbol}`)
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get price history for charting
    getPriceHistory: async (symbol, timeframe = '1m', limit = 200) => {
      try {
        const response = await apiClient.get(`/feature-trading/markets/${symbol}/history`, {
          params: { timeframe, limit }
        })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get user's trading positions
    getPositions: async (symbol) => {
      try {
        const response = await apiClient.get('/feature-trading/positions', {
          params: symbol ? { symbol } : {}
        })
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Open a new trading position
    openPosition: async (data) => {
      try {
        const response = await apiClient.post('/feature-trading/positions/open', data)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Close a trading position
    closePosition: async (positionId) => {
      try {
        const response = await apiClient.post(`/feature-trading/positions/${positionId}/close`)
        return handleApiResponse(response)
      } catch (error) {
        return handleApiError(error)
      }
    },

    // Get trading statistics
    getStats: async () => {
      try {
        const response = await apiClient.get('/feature-trading/stats')
        return handleApiResponse(response.data)
      } catch (error) {
        return handleApiError(error)
      }
    }
  }
}

export { apiClient }
