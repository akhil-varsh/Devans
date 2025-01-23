import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-neutral-dark relative">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="gradient-text">About</span> TriMorph
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              At TriMorph Robotics, we're revolutionizing the field of robotics with our groundbreaking multi-modal transformation technology. Our mission is to create versatile robotic solutions that adapt to any challenge.
            </p>
            
            <p className="text-xl text-gray-300">
              Our innovative approach combines advanced AI, cutting-edge hardware, and seamless transformation capabilities to deliver robots that excel in multiple environments and applications.
            </p>

            <motion.button
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our Vision
            </motion.button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
            <motion.div
              className="card relative"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
                Why TriMorph?
              </h3>
              <ul className="space-y-4">
                {[
                  'Adaptive Transformation Technology',
                  'Advanced AI Integration',
                  'Multi-Environment Operation',
                  'Seamless Mode Switching',
                  'Real-Time Decision Making',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-secondary">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}