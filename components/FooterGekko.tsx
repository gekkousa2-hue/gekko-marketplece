import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FooterGekko() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <footer className="relative glass-dark mt-20 border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-electric-500 to-midnight-600 pointer-events-none" />

      <div className="container-alt relative z-10 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500 to-midnight-600 flex items-center justify-center text-white font-black">
                G
              </div>
              <span className="text-xl font-bold text-neon">Gekko</span>
            </div>
            <p className="text-sm text-gray-400">
              Experience the future of tech commerce with premium products and ultramodern design.
            </p>
          </motion.div>

          {/* Links */}
          {[
            {
              title: 'Explore',
              links: ['Products', 'Categories', 'Trending', 'New Arrivals'],
            },
            {
              title: 'Support',
              links: ['Help Center', 'Contact Us', 'FAQ', 'Shipping Info'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Blog', 'Careers', 'Press'],
            },
          ].map((column) => (
            <motion.div key={column.title} variants={itemVariants} className="space-y-4">
              <h4 className="text-sm font-bold text-neon">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-electric-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12 origin-left"
        />

        {/* Bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <motion.p variants={itemVariants} className="text-sm text-gray-500">
            © 2024 Gekko Marketplace. All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 text-sm text-gray-400"
          >
            <a href="#" className="hover:text-electric-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-electric-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-electric-400 transition-colors">
              Cookies
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {['𝕏', '💬', '📘', '📷'].map((social) => (
              <button
                key={social}
                className="w-8 h-8 glass rounded-lg border border-white/10 hover:border-electric-500/50 hover:text-electric-400 transition-all"
              >
                {social}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}