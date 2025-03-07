import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaCloud, FaRobot, FaDatabase, FaTools } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and frameworks.',
    icon: FaCode,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: FaMobile,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    icon: FaCloud,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI technologies.',
    icon: FaRobot,
  },
  {
    title: 'Database Solutions',
    description: 'Optimized database design and management systems.',
    icon: FaDatabase,
  },
  {
    title: 'DevOps Services',
    description: 'Streamlined development and deployment processes.',
    icon: FaTools,
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-0 left-0 -mt-4 ml-6 bg-primary rounded-full p-3">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;