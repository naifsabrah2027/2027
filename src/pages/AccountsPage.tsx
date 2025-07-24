import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AccountCard from '../components/AccountCard'
import LoadingScreen from '../components/LoadingScreen'
import { Filter } from 'lucide-react'
import type { Account } from '../lib/supabase'

const AccountsPage: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<'all' | 'premium' | 'regular'>('all')

  useEffect(() => {
    const timer = setTimeout(() => {
      // Sample data - same as HomePage but more accounts
      const sampleAccounts: Account[] = [
        {
          id: '1',
          title: 'حساب ببجي مميز - مستوى 80',
          price: 450,
          category: 'premium',
          images: [
            'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
            'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
          ],
          details: {
            'المستوى': '80',
            'النقاط': '15,000',
            'الأسلحة': 'M416, AKM, AWM',
            'الأزياء': '25 زي',
            'العربات': '12 عربة',
            'الشخصيات': '8 شخصيات'
          },
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: '2',
          title: 'حساب متنوع - مستوى 65',
          price: 280,
          category: 'regular',
          images: [
            'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
          ],
          details: {
            'المستوى': '65',
            'النقاط': '8,500',
            'الأسلحة': 'SCAR-L, UMP45',
            'الأزياء': '15 زي',
            'العربات': '7 عربات',
            'الشخصيات': '5 شخصيات'
          },
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ]
      
      // Generate more accounts for demonstration
      const allAccounts = Array.from({ length: 30 }, (_, index) => ({
        ...sampleAccounts[index % 2],
        id: (index + 1).toString(),
        title: `${sampleAccounts[index % 2].title} - #${index + 1}`,
        price: sampleAccounts[index % 2].price + (index * 10)
      }))
      
      setAccounts(allAccounts)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const filteredAccounts = accounts.filter(account => {
    if (activeCategory === 'all') return true
    return account.category === activeCategory
  })

  const premiumAccounts = filteredAccounts.filter(acc => acc.category === 'premium')
  const regularAccounts = filteredAccounts.filter(acc => acc.category === 'regular')

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              حسابات ببجي موبايل
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            اختر من مجموعة واسعة من حسابات ببجي موبايل المميزة والمتنوعة
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gray-800 rounded-lg p-1 flex items-center space-x-1 rtl:space-x-reverse">
            <Filter className="text-yellow-400 mr-2" size={20} />
            {[
              { key: 'all', label: 'الكل' },
              { key: 'premium', label: 'مميزة' },
              { key: 'regular', label: 'متنوعة' }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key as any)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Premium Accounts Section */}
        {(activeCategory === 'all' || activeCategory === 'premium') && premiumAccounts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg font-bold text-xl">
                ⭐ الحسابات المميزة ⭐
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {premiumAccounts.map((account, index) => (
                <motion.div
                  key={account.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccountCard account={account} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Accounts Section */}
        {(activeCategory === 'all' || activeCategory === 'regular') && regularAccounts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                🎮 الحسابات المتنوعة 🎮
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {regularAccounts.map((account, index) => (
                <motion.div
                  key={account.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccountCard account={account} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {filteredAccounts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-xl">لا توجد حسابات في هذا القسم حالياً</div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AccountsPage