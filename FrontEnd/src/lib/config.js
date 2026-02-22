// Configuration for development vs production modes
export const config = {
    // Environment detection
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    token:"USD",
    // Backend URLs
    backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
    wsUrl: process.env.REACT_APP_WS_URL || 'http://localhost:3001',
    
    // API configuration
    api: {
           // Use direct backend connection in development, Next.js proxy in production
      //  baseUrl: process.env.NODE_ENV === 'development' 
      //    ? (process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001') + '/api'
      //    : '/api',
       baseUrl: (process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001') + '/api'
      ,
      // WebSocket configuration
      wsUrl: process.env.NODE_ENV === 'development'
        ? (process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001')
        : (process.env.REACT_APP_WS_URL || 'http://localhost:3001'),
    },
    
    // Feature flags
    features: {
      // Enable direct backend calls in development for easier debugging
      directBackendCalls: process.env.NODE_ENV === 'development',
      
      // Enable detailed logging in development
      detailedLogging: process.env.NODE_ENV === 'development',
      
      // Enable WebSocket debugging in development
      wsDebugging: process.env.NODE_ENV === 'development',
    }
  }
  
  // Helper function to get current mode info
  export const getModeInfo = () => {
    return {
      mode: config.isDevelopment ? 'Development' : 'Production',
      apiUrl: config.api.baseUrl,
      wsUrl: config.api.wsUrl,
      directBackend: config.features.directBackendCalls,
    }
  }
  
  // Helper function to log configuration (only in development)
  export const logConfig = () => {
    if (config.isDevelopment) {
      console.log('🔧 Configuration:', getModeInfo())
    }
  }
  
  // Export default config
  export default config
  