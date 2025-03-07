import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Successful Projects', value: '100+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const features = [
    'Agile Development Methodology',
    'Dedicated Development Teams',
    'Quality Assurance & Testing',
    'Transparent Communication',
    'On-time Delivery',
    'Post-deployment Support',
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Techvify Software
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We are a leading IT outsourcing company dedicated to delivering innovative software solutions. Our team of experts combines technical excellence with industry knowledge to help businesses achieve their digital transformation goals.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Why Choose Us?</h3>
              <div className="mt-4 grid grid-cols-1 gap-4">
                {features.map((feature) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center"
                  >
                    <FaCheckCircle className="h-5 w-5 text-primary" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 relative">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-multiply" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;