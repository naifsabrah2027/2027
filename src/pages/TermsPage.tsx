import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ShoppingCart, MessageCircle, CheckCircle } from 'lucide-react'

const TermsPage: React.FC = () => {
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
              شروط المتجر
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            اقرأ الشروط والأحكام بعناية قبل بيع أو شراء الحسابات
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Selling Terms Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-8 border border-yellow-500/20"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg mr-4">
                <ShoppingCart className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">شروط بيع حسابك</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-yellow-400 font-bold text-lg mb-4 flex items-center">
                  <CheckCircle className="mr-2" size={20} />
                  1- تصفير حسابك من كل الارتباطات
                </h3>
                <ul className="space-y-3 text-gray-300 pr-6">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">●</span>
                    ازالة كل بريد الكتروني في اللعبه
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">●</span>
                    ازل كل حساب تواصل اجتماعي منصة X تويتر منصة الفيس بوك وغيرها اذا تواجد في اللعبه
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">●</span>
                    اجعل فقط ارتباط الهاتف الخاص بك في اللعبه
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">●</span>
                    تواصل معنا وعند الاتفاق سنقوم بعمل ايميل جديد لحسابك وسنرسله لك لكي تضيف الايميل الجديد وتقوم بحذف رقم هاتفك
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">●</span>
                    <span className="text-red-300">سنرسل اموالك خلال 21 يوم لسياسة شركه ببجي للاسترجاع</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-yellow-400 font-bold text-lg mb-4 flex items-center">
                  <MessageCircle className="mr-2" size={20} />
                  2- تواصل معنا على الواتس اب
                </h3>
                <motion.a
                  href="https://wa.me/967777826667"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <MessageCircle size={20} />
                  <span>+967777826667</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Buying Terms Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-8 border border-blue-500/20"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                <Shield className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">شروط شراء حساب</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-blue-400 font-bold text-lg mb-4 flex items-center">
                  <CheckCircle className="mr-2" size={20} />
                  خطوات الشراء
                </h3>
                <ul className="space-y-3 text-gray-300 pr-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">●</span>
                    قم باختيار الحساب ثم قم باضافة معلوماتك واضغط على ارسال الى الواتس اب
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">●</span>
                    سيتم ارسالك الى الواتس اب تلقائياً مع معلوماتك اسمك ورقمك وهاتفك وكذلك سيتم ارسال معلومات الحساب الذي تريده
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/30">
                <h3 className="text-green-400 font-bold text-lg mb-4">ضمانات المتجر</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    ضمان صحة المعلومات المعروضة
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    تسليم فوري للحسابات
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    دعم فني 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    أمان وسرية كاملة
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">تحتاج مساعدة؟</h2>
            <p className="text-gray-300 mb-6">
              تواصل معنا عبر الواتساب لأي استفسار أو مساعدة
            </p>
            <motion.a
              href="https://wa.me/967777826667"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
            >
              <MessageCircle size={24} />
              <span>تواصل معنا الآن</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage