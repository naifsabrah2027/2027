import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Shield, User, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAdmin, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 shadow-lg sticky top-0 z-40"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PG</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">متجر حسابات ببجي</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/" className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2 rtl:space-x-reverse">
              <ShoppingBag size={18} />
              <span>الرئيسية</span>
            </Link>
            <Link to="/accounts" className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2 rtl:space-x-reverse">
              <User size={18} />
              <span>الحسابات</span>
            </Link>
            <Link to="/terms" className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2 rtl:space-x-reverse">
              <Shield size={18} />
              <span>الشروط</span>
            </Link>
            {isAdmin && (
              <>
                <Link to="/admin" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  لوحة الإدارة
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  تسجيل خروج
                </button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 rounded-lg mt-2 p-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2 rtl:space-x-reverse"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag size={18} />
                <span>الرئيسية</span>
              </Link>
              <Link
                to="/accounts"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2 rtl:space-x-reverse"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} />
                <span>الحسابات</span>
              </Link>
              <Link
                to="/terms"
                className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2 rtl:space-x-reverse"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield size={18} />
                <span>الشروط</span>
              </Link>
              {isAdmin && (
                <>
                  <Link
                    to="/admin"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    لوحة الإدارة
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="text-red-400 hover:text-red-300 transition-colors text-right"
                  >
                    تسجيل خروج
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header