import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageCircle, ShoppingCart } from 'lucide-react'
import type { Account } from '../lib/supabase'

interface AccountCardProps {
  account: Account
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % account.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + account.images.length) % account.images.length)
  }

  const sendToWhatsApp = () => {
    const message = `السلام عليكم، أريد شراء هذا الحساب:
    
العنوان: ${account.title}
السعر: ${account.price} ريال

تفاصيل الحساب:
${Object.entries(account.details).map(([key, value]) => `${key}: ${value}`).join('\n')}

الرجاء التواصل معي لإتمام عملية الشراء.`

    const whatsappUrl = `https://wa.me/967777826667?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-2xl border border-yellow-500/20"
    >
      {/* Image Carousel */}
      <div className="relative h-48 overflow-hidden">
        {account.images.length > 0 && (
          <>
            <img
              src={account.images[currentImageIndex]}
              alt={`${account.title} - صورة ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {account.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                  {account.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded text-xs font-semibold ${
            account.category === 'premium' 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
              : 'bg-blue-500 text-white'
          }`}>
            {account.category === 'premium' ? 'مميز' : 'عادي'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2">{account.title}</h3>
        <div className="text-yellow-400 font-bold text-xl mb-4">{account.price} ريال</div>

        {/* Account Details */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          {Object.entries(account.details).slice(0, 6).map(([key, value]) => (
            <div key={key} className="bg-gray-800 p-2 rounded">
              <div className="text-gray-400 text-xs">{key}</div>
              <div className="text-white font-semibold">{value}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 rtl:space-x-reverse">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendToWhatsApp}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 rtl:space-x-reverse hover:shadow-lg transition-all"
          >
            <MessageCircle size={18} />
            <span>واتساب</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendToWhatsApp}
            className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 rtl:space-x-reverse hover:shadow-lg transition-all"
          >
            <ShoppingCart size={18} />
            <span>شراء</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default AccountCard