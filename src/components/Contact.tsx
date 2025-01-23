import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-padding bg-neutral-dark/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Get in</span> Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in learning more about TriMorph Robotics? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="button-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-xl font-display font-bold mb-4 gradient-text">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <span className="text-secondary">📍</span>
                  <span>VNRVJIET,Hyderabad</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-secondary">📧</span>
                  <span>akvarsh1013@gmail.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-secondary">📱</span>
                  <span>+91 9493312768</span>
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-display font-bold mb-4 gradient-text">
                Office Hours
              </h3>
             <div className="space-y-2">
  <p>
    Monday <span>(Type: file, Path: src/components/Contact.tsx)</span> - Friday: 9:00 AM - 6:00 PM
  </p>
  <p>Saturday: 10:00 AM - 2:00 PM</p>
  <p>Sunday: Closed</p>
</div>

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}