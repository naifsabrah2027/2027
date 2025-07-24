import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface AuthContextType {
  isAdmin: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const savedAuth = localStorage.getItem('pubg_admin_auth')
    if (savedAuth === 'true') {
      setIsAdmin(true)
    }
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    if (username === 'admin' && password === 'pubg2026') {
      setIsAdmin(true)
      localStorage.setItem('pubg_admin_auth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    localStorage.removeItem('pubg_admin_auth')
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}