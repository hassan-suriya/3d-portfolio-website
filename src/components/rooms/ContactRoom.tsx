import React from 'react'
import { motion } from 'framer-motion'

const ContactRoom: React.FC = () => {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@yourname.com',
      link: 'mailto:hello@yourname.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/yourname',
      link: 'https://linkedin.com/in/yourname',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@yourname',
      link: 'https://github.com/yourname',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@yourname',
      link: 'https://twitter.com/yourname',
      color: 'from-sky-400 to-blue-500'
    }
  ]

  return (
    <div className="flex items-center justify-center h-full px-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 pointer-events-auto"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="block p-4 bg-gray-900/30 hover:bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group pointer-events-auto"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                      {method.label}
                    </h4>
                    <p className="text-gray-400 text-sm">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/20"
            >
              <h4 className="text-xl font-semibold text-white mb-3">Availability</h4>
              <p className="text-gray-300 text-sm mb-2">
                🟢 Available for freelance projects
              </p>
              <p className="text-gray-300 text-sm mb-2">
                🚀 Open to full-time opportunities
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Typically responds within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center mt-12 pointer-events-auto"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactRoom
