import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const applications = [
  {
    title: 'Search & Rescue',
    description: 'Rapid response in disaster scenarios with multi-modal adaptation to various terrains.',
    icon: '🚨',
  },
  {
    title: 'Environmental Monitoring',
    description: 'Comprehensive environmental data collection across land, air, and difficult terrain.',
    icon: '🌍',
  },
  {
    title: 'Industrial Automation',
    description: 'Versatile automation solutions for complex manufacturing and warehouse operations.',
    icon: '🏭',
  },
  {
    title: 'Urban Exploration',
    description: 'Safe navigation and inspection of urban infrastructure and construction sites.',
    icon: '🏙️',
  },
];

export function Applications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="applications" className="section-padding bg-neutral-dark/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Real-World</span> Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how TriMorph Robotics is revolutionizing various industries
            with its adaptive transformation technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="card h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-display font-bold mb-4 gradient-text">
                  {app.title}
                </h3>
                <p className="text-gray-300">
                  {app.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            className="button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}