import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const team = [
  {
    name: 'Akhilvarsh Pettem',
    role: 'Chief Executive Officer',
    expertise: 'Robotics & AI',
    image: 'src/assets/avatar.jpg',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Chief Technology Officer',
    expertise: 'Mechanical Engineering',
    image: 'https://placehold.co/300x300/transparent/transparent?text=JW',
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Head of AI Research',
    expertise: 'Machine Learning',
    image: 'https://placehold.co/300x300/transparent/transparent?text=MR',
  },
  {
    name: 'Alex Thompson',
    role: 'Lead Software Engineer',
    expertise: 'Robotics Software',
    image: 'https://placehold.co/300x300/transparent/transparent?text=AT',
  },
];

export function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Meet Our</span> Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our team of experts brings together decades of experience in robotics,
            AI, and engineering to push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="card text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <h3 className="text-xl font-display font-bold mb-2 gradient-text">
                  {member.name}
                </h3>
                <p className="text-secondary mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.expertise}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}