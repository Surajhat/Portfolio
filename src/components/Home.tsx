import { motion } from 'framer-motion';
import { contactInfo, summary } from '../data/portfolioData';

const Home = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
          {contactInfo.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Software Engineer
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {summary}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center space-x-6"
      >
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          GitHub
        </a>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${contactInfo.email}`}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Email
        </a>
      </motion.div>
    </div>
  );
};

export default Home;