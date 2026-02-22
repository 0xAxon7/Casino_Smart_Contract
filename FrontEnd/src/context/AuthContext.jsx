'use client'

import { apiClient, gameApi, authUtils } from '@/lib/api'
import supabase from '@/lib/supabase'
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

// User types
// interface User {
//   id: string
//   email: string
//   username?: string
//   isAuthenticated: boolean
//   isLoading: boolean
//   profile: UserProfile | null
//   balance: number
// }

// interface AuthContextType {
//   user: User
//   isLoading: boolean
//   signIn: (email: string, password: string) => Promise<void>
//   signUp: (email: string, password: string, metadata?: { name?: string }) => Promise<void>
//   signInWithGoogle: () => Promise<void>
//   signInWithTwitter: () => Promise<void>
//   signInWithMetaMask: () => Promise<void>
//   signOut: () => Promise<void>
//   refreshProfile: () => Promise<void>
//   updateUser: (profile: Partial<UserProfile>) => void
//   updateBalance: (newBalance: number) => void
//   fetchUserProfile: () => Promise<void>
//   loginWithOTP?: (email: string, code: string) => Promise<void>
// }

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    id: '',
    email: '',
    username: '',
    isAuthenticated: false,
    isLoading: true,
    profile: null,
    balance: 0
  })
  
  // Flag to prevent multiple simultaneous auth checks
  const authCheckInProgress = React.useRef(false)

  // Fetch user profile (assumes user is already authenticated)
  const fetchUserProfile = useCallback(async () => {
    try {
      const response = await gameApi.user.getProfile()
      if (response.success && response.data) {
        const profile = response.data
        setUser(prev => ({
          ...prev,
          id: profile.id,
          email: profile.email,
          username: profile.username,
          isAuthenticated: true,
          isLoading: false,
          profile: profile,
          balance: profile.balance
        }))
        console.log('✅ User profile loaded:', profile.username)
      } else {
        throw new Error('Failed to fetch profile')
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error)
      setUser(prev => ({
        ...prev,
        isAuthenticated: false,
        isLoading: false,
        profile: null
      }))
    }
  }, [])

  // Check authentication status
  const checkAuthStatus = useCallback(async () => {
    // Prevent multiple simultaneous auth checks
    if (authCheckInProgress.current) {
      console.log('🔄 Auth check already in progress, skipping')
      return
    }

    // Check if we're in a redirect loop - if so, don't attempt auth check
    if (typeof window !== 'undefined' && sessionStorage.getItem('auth_redirect_flag')) {
      console.log('🔄 Auth redirect flag detected, skipping auth status check')
      sessionStorage.removeItem('auth_redirect_flag')
      sessionStorage.removeItem('logout_in_progress') // Clear logout flag as well
      setUser(prev => ({
        ...prev,
        isAuthenticated: false,
        isLoading: false,
        profile: null
      }))
      return
    }
    
    try {
      authCheckInProgress.current = true
      setIsLoading(true)
      
      console.log('🔐 Starting auth status check')
      const isAuth = await authUtils.isAuthenticated()
      
      if (isAuth) {
        // User is authenticated, fetch profile
        console.log('✅ User is authenticated, fetching profile')
        await fetchUserProfile()
      } else {
        // User is not authenticated
        console.log('❌ User is not authenticated')
        setUser(prev => ({
          ...prev,
          isAuthenticated: false,
          isLoading: false,
          profile: null
        }))
      }
    } catch (error) {
      console.error('Auth status check failed:', error)
      setUser(prev => ({
        ...prev,
        isAuthenticated: false,
        isLoading: false,
        profile: null
      }))
    } finally {
      setIsLoading(false)
      authCheckInProgress.current = false
    }
  }, [fetchUserProfile])

  // Sign in with email/password
  const signIn = useCallback(async (email, password) => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      // Token exchange will be handled automatically by onAuthStateChange
      // when the SIGNED_IN event is triggered
    } catch (error) {
      console.error('Sign in error:', error)
      throw new Error(error.message || 'Sign in failed')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Sign up with email/password
  const signUp = useCallback(async (email, password, metadata) => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      })

      if (error) throw error

      // Token exchange will be handled automatically by onAuthStateChange
      // when the SIGNED_IN event is triggered
    } catch (error) {
      console.error('Sign up error:', error)
      throw new Error(error.message || 'Sign up failed')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Login with OTP
  const loginWithOTP = useCallback(async (email, code) => {
    try {
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/otp/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important: needed to receive cookies
        body: JSON.stringify({ email, code })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'OTP verification failed')
      }

      // Store tokens
      if (data.token) {
        localStorage.setItem('auth_token', data.token)
      }
      if (data.platformToken) {
        localStorage.setItem('platform_token', data.platformToken)
      }

      // Update user state with the returned user data
      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email,
          username: data.user.username,
          isAuthenticated: true,
          isLoading: false,
          profile: data.user,
          balance: data.user.balance
        })
      }

      console.log('✅ OTP login successful')
    } catch (error) {
      console.error('OTP login error:', error)
      throw new Error(error.message || 'OTP verification failed')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Sign in with Google
  const signInWithGoogle = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) throw error
    } catch (error) {
      console.error('Google sign in error:', error)
      throw new Error(error.message || 'Google sign in failed')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Sign in with Twitter
  const signInWithTwitter = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'twitter',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) throw error
    } catch (error) {
      console.error('Twitter sign in error:', error)
      throw new Error(error.message || 'Twitter sign in failed')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Sign in with MetaMask
  const signInWithMetaMask = useCallback(async (walletAddress, message, signature) => {
    try {
      setIsLoading(true)
      console.log('🔐 MetaMask wallet connected:', walletAddress)

      // Step 1: Get nonce from backend
      const nonceResponse = await apiClient.post('/auth/wallet/nonce', {
        walletAddress
      })

      if (!nonceResponse.data?.nonce || !nonceResponse.data?.message) {
        throw new Error('Failed to get authentication nonce')
      }

      const { message } = nonceResponse.data

      // Step 2: Sign the message with MetaMask
      console.log('📝 Requesting signature from MetaMask...')
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, walletAddress]
      })

      if (!signature) {
        throw new Error('Signature request was rejected')
      }

      console.log('✅ Message signed successfully')

      // Step 3: Verify signature and login
      const verifyResponse = await apiClient.post('/auth/wallet/verify', {
        walletAddress,
        signature
      })

      if (verifyResponse.data?.success && verifyResponse.data?.user) {
        // Update user state
        const userData = verifyResponse.data.user
        setUser({
          id: userData.id,
          email: userData.email || '',
          username: userData.username,
          isAuthenticated: true,
          isLoading: false,
          profile: userData,
          balance: userData.balance
        })

        console.log('✅ MetaMask authentication successful:', userData.username)
      } else {
        throw new Error('Verification failed')
      }
    } catch (error) {
      console.error('MetaMask sign in error:', error)
      
      // User-friendly error messages
      if (error.code === 4001) {
        throw new Error('MetaMask signature request was rejected')
      } else if (error.message?.includes('not installed')) {
        throw new Error('MetaMask is not installed. Please install the MetaMask extension.')
      } else {
        throw new Error(error.message || 'MetaMask authentication failed')
      }
    } finally {
      setIsLoading(false)
    }
  }, [fetchUserProfile])

  // Exchange Supabase token for platform JWT
  const exchangeToken = useCallback(async (supabaseToken) => {
    try {
      // Check if we're in a redirect loop - if so, don't attempt token exchange
      if (typeof window !== 'undefined' && sessionStorage.getItem('auth_redirect_flag')) {
        console.log('🔄 Auth redirect flag detected, skipping token exchange')
        sessionStorage.removeItem('auth_redirect_flag')
        sessionStorage.removeItem('logout_in_progress') // Clear logout flag as well
        setUser(prev => ({
          ...prev,
          isAuthenticated: false,
          isLoading: false,
          profile: null
        }))
        return
      }

      const response = await apiClient.post('/auth/exchange', {
        token: supabaseToken
      })

      if (response.data.success) {
        console.log('✅ Platform token obtained and stored in cookie')
        // Fetch user profile after successful token exchange
        await fetchUserProfile()
      } else {
        throw new Error('Token exchange failed')
      }
    } catch (error) {
      console.error('❌ Token exchange failed:', error)
      // Clear user state on token exchange failure
      setUser(prev => ({
        ...prev,
        isAuthenticated: false,
        isLoading: false,
        profile: null
      }))
      // Ensure Supabase session and local tokens are cleared to avoid repeated failures
      try {
        await supabase.auth.signOut()
      } catch (_) {}
      if (typeof window !== 'undefined') {
        try {
          // Supabase stores session under this key pattern in localStorage
          localStorage.removeItem('supabase.auth.token')
          // Clear any app-specific tokens if present
          localStorage.removeItem('auth_token')
          localStorage.removeItem('platform_token')
          sessionStorage.removeItem('auth_redirect_flag')
          sessionStorage.removeItem('logout_in_progress')
        } catch (_) {}
      }
      throw error
    }
  }, [fetchUserProfile])

  // Sign out
  const signOut = useCallback(async () => {
    try {
      setIsLoading(true)
      
      // Call backend logout to clear cookie
      await authUtils.logout()
      
      // Sign out from Supabase
      await supabase.auth.signOut()
      
      // Clear user state
      setUser({
        id: '',
        email: '',
        username: '',
        isAuthenticated: false,
        isLoading: false,
        profile: null,
        balance: 0
      })
      
      console.log('✅ User signed out successfully')
      
      // Redirect to home page
      if (typeof window !== 'undefined') {
        window.location.href = '/'
      }
    } catch (error) {
      console.error('Sign out error:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Refresh user profile
  const refreshProfile = useCallback(async () => {
    if (user.isAuthenticated) {
      await fetchUserProfile()
    }
  }, [user.isAuthenticated, fetchUserProfile])

  // Update user profile
  const updateUser = useCallback((profile) => {
    setUser(prev => ({
      ...prev,
      profile: prev.profile ? { ...prev.profile, ...profile } : null
    }))
  }, [])

  // Update user balance
  const updateBalance = useCallback((newBalance) => {
    setUser(prev => ({
      ...prev,
      balance: newBalance,
      profile: prev.profile ? { ...prev.profile, balance: newBalance } : null
    }))
  }, [])

  // Listen to auth state changes
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔄 Auth state change:', event, session?.user?.email)
        
        // Check if we're in a redirect loop - if so, don't process auth state changes
        if (typeof window !== 'undefined' && sessionStorage.getItem('auth_redirect_flag')) {
          console.log('🔄 Auth redirect flag detected, skipping auth state change processing')
          return
        }
        
        if (event === 'SIGNED_IN' && session?.user || event === 'INITIAL_SESSION' && session?.user) {
          // Exchange Supabase token for platform JWT
          if (session.access_token) {
            try {
              await exchangeToken(session.access_token)
            } catch (error) {
              console.error('❌ Failed to exchange token:', error)
            }
          }
        } else if (event === 'SIGNED_OUT') {
          // Clear user state
          setUser(prev => ({
            ...prev,
            isAuthenticated: false,
            profile: null
          }))
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [exchangeToken])

  // Check auth status on mount only
  useEffect(() => {
    checkAuthStatus()
  }, []) // Empty dependency array - only run once on mount

  const value = {
    user,
    isLoading,
    signIn,
    signUp,
    signInWithGoogle,
    signInWithTwitter,
    signInWithMetaMask,
    signOut,
    refreshProfile,
    updateUser,
    updateBalance,
    fetchUserProfile,
    loginWithOTP
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}