import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-orange-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
        >
          PG
        </motion.div>
        <motion.div
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded mx-auto"
          style={{ width: '200px' }}
        />
        <p className="text-white mt-4 text-lg font-semibold">جاري التحميل...</p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen