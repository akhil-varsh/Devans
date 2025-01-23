import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-neutral-dark/80 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.h3
              className="text-2xl font-display font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              TriMorph
            </motion.h3>
            <p className="text-gray-300">
              Transforming the future of robotics with adaptive technology and innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Features', 'Applications', 'Team', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-secondary cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-secondary cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest developments and innovations.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
              />
              <motion.button
                className="button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} TriMorph Robotics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}