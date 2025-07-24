import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Banner from '../components/Banner'
import NewsBar from '../components/NewsBar'
import AccountCard from '../components/AccountCard'
import LoadingScreen from '../components/LoadingScreen'
import { supabase, type Account } from '../lib/supabase'

const HomePage: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading and set sample data
    const timer = setTimeout(() => {
      const sampleAccounts: Account[] = [
        {
          id: '1',
          title: 'حساب ببجي مميز - مستوى 80',
          price: 450,
          category: 'premium',
          images: [
            'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
            'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
            'https://images.pexels.com/photos/1720229/pexels-photo-1720229.jpeg'
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
            'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
            'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg'
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
      
      // Repeat accounts to fill 20 items (2x10 grid)
      const allAccounts = Array.from({ length: 20 }, (_, index) => ({
        ...sampleAccounts[index % 2],
        id: (index + 1).toString(),
        title: `${sampleAccounts[index % 2].title} - #${index + 1}`
      }))
      
      setAccounts(allAccounts)
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <NewsBar />
      <Banner />
      
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-8"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            متجر حسابات ببجي موبايل
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
        >
          أفضل حسابات ببجي موبايل بأسعار منافسة وضمان كامل. تواصل معنا عبر الواتساب لشراء حسابك المثالي
        </motion.p>

        {/* Accounts Grid - 2 columns x 10 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {accounts.map((account, index) => (
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

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">تواصل معنا</h2>
          <p className="text-gray-300 mb-6">
            للاستفسارات وشراء الحسابات، تواصل معنا عبر الواتساب
          </p>
          <motion.a
            href="https://wa.me/967777826667"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <span>+967777826667</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage