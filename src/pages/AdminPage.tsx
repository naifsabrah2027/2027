import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { 
  Users, 
  Settings, 
  Image, 
  FileText, 
  Plus, 
  Edit3, 
  Trash2,
  Save,
  X
} from 'lucide-react'

const AdminPage: React.FC = () => {
  const { isAdmin } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('accounts')
  const [showAddForm, setShowAddForm] = useState(false)

  if (!isAdmin) {
    navigate('/')
    return null
  }

  const tabs = [
    { id: 'accounts', label: 'إدارة الحسابات', icon: Users },
    { id: 'news', label: 'الشريط الإخباري', icon: FileText },
    { id: 'banner', label: 'البانر', icon: Image },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ]

  const TabIcon = tabs.find(tab => tab.id === activeTab)?.icon || Users

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 via-orange-600 to-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* Admin Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
              لوحة الإدارة
            </span>
          </h1>
          <p className="text-yellow-100 text-lg">
            إدارة شاملة لمتجر حسابات ببجي موبايل
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-64 bg-gradient-to-br from-black/70 to-gray-900/70 rounded-lg p-6 h-fit"
            >
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                          : 'text-yellow-100 hover:bg-gray-800/50'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-semibold">{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 bg-gradient-to-br from-black/70 to-gray-900/70 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                    <TabIcon className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h2>
                </div>
                
                {activeTab === 'accounts' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAddForm(true)}
                    className="flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    <Plus size={20} />
                    <span>إضافة حساب</span>
                  </motion.button>
                )}
              </div>

              {/* Tab Content */}
              {activeTab === 'accounts' && <AccountsManagement />}
              {activeTab === 'news' && <NewsManagement />}
              {activeTab === 'banner' && <BannerManagement />}
              {activeTab === 'settings' && <SettingsManagement />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Accounts Management Component
const AccountsManagement: React.FC = () => {
  const [accounts, setAccounts] = useState([
    {
      id: '1',
      title: 'حساب ببجي مميز - مستوى 80',
      price: 450,
      category: 'premium',
      status: 'active'
    },
    {
      id: '2',
      title: 'حساب متنوع - مستوى 65',
      price: 280,
      category: 'regular',
      status: 'active'
    }
  ])

  return (
    <div className="space-y-4">
      {accounts.map((account) => (
        <motion.div
          key={account.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">{account.title}</h3>
            <div className="flex items-center space-x-4 rtl:space-x-reverse mt-2">
              <span className="text-yellow-400 font-bold">{account.price} ريال</span>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                account.category === 'premium' 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-blue-500 text-white'
              }`}>
                {account.category === 'premium' ? 'مميز' : 'عادي'}
              </span>
              <span className="text-green-400 text-sm">نشط</span>
            </div>
          </div>
          
          <div className="flex space-x-2 rtl:space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Edit3 size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Trash2 size={16} />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// News Management Component
const NewsManagement: React.FC = () => {
  const [newsItems, setNewsItems] = useState([
    '🔥 عروض خاصة على حسابات ببجي المميزة هذا الأسبوع!',
    '⭐ أحدث الحسابات المميزة متوفرة الآن',
    '🎮 تواصل معنا عبر الواتساب +967777826667'
  ])
  const [newItem, setNewItem] = useState('')

  const addNewsItem = () => {
    if (newItem.trim()) {
      setNewsItems([...newsItems, newItem])
      setNewItem('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-800/50 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-4">إضافة خبر جديد</h3>
        <div className="flex space-x-2 rtl:space-x-reverse">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="اكتب الخبر الجديد..."
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addNewsItem}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>

      {newsItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-between"
        >
          <p className="text-white flex-1">{item}</p>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Edit3 size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNewsItems(newsItems.filter((_, i) => i !== index))}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Trash2 size={16} />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Banner Management Component
const BannerManagement: React.FC = () => {
  const [banners, setBanners] = useState([
    { id: 1, title: 'حسابات ببجي مميزة', url: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg', active: true },
    { id: 2, title: 'أفضل الأسعار', url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg', active: true },
    { id: 3, title: 'ضمان وأمان', url: 'https://images.pexels.com/photos/1720229/pexels-photo-1720229.jpeg', active: true }
  ])

  return (
    <div className="space-y-4">
      {banners.map((banner) => (
        <motion.div
          key={banner.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-lg p-4 flex items-center space-x-4 rtl:space-x-reverse"
        >
          <img
            src={banner.url}
            alt={banner.title}
            className="w-24 h-16 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-white font-semibold">{banner.title}</h3>
            <p className="text-gray-400 text-sm">نشط</p>
          </div>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Edit3 size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Trash2 size={16} />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Settings Management Component
const SettingsManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-4">إعدادات عامة</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">رقم الواتساب</label>
            <input
              type="text"
              defaultValue="+967777826667"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">اسم المتجر</label>
            <input
              type="text"
              defaultValue="متجر حسابات ببجي موبايل"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Save size={20} />
          <span>حفظ التغييرات</span>
        </motion.button>
      </div>
    </div>
  )
}

export default AdminPage