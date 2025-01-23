import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-neutral-dark" />
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">Transforming</span> Robotics,
              <br />
              <span className="gradient-text">Transforming</span> Possibilities
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of adaptive robotics with our revolutionary multi-modal transformation technology.
            </p>

            <div className="flex space-x-4">
              <motion.button
                className="button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
              
              <motion.button
                className="button-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-full bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-3xl absolute inset-0" />
            <img
              src="https://placehold.co/600x600/transparent/transparent?text=Robot+3D+Model"
              alt="TriMorph Robot"
              className="relative z-10 w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-dark to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </section>
  );
}