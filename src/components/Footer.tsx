import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/techvify' },
    { icon: FaTwitter, href: 'https://twitter.com/techvify' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/techvify' },
    { icon: FaGithub, href: 'https://github.com/techvify' },
  ];

  const footerLinks = [
    { title: 'Company', items: ['About', 'Careers', 'Blog', 'Press'] },
    { title: 'Services', items: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'DevOps'] },
    { title: 'Support', items: ['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact'] },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold">Techvify Software</h3>
              <p className="mt-4 text-gray-400 max-w-md">
                Empowering businesses through innovative software solutions. Your trusted partner in digital transformation.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Techvify Software. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;