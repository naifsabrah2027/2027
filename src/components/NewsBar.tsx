import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

const NewsBar: React.FC = () => {
  const [news, setNews] = useState<string[]>([])

  useEffect(() => {
    // Default news items
    setNews([
      '🔥 عروض خاصة على حسابات ببجي المميزة هذا الأسبوع!',
      '⭐ أحدث الحسابات المميزة متوفرة الآن',
      '🎮 تواصل معنا عبر الواتساب +967777826667',
      '💎 ضمان أمان كامل لجميع الحسابات',
      '🚀 توصيل فوري للحسابات خلال دقائق'
    ])
  }, [])

  if (news.length === 0) return null

  return (
    <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-2 overflow-hidden">
      <motion.div
        animate={{
          x: ['100%', '-100%']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="whitespace-nowrap"
      >
        {news.map((item, index) => (
          <span key={index} className="mx-8 text-sm font-semibold">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default NewsBar