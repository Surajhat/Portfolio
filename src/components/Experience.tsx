import { motion } from 'framer-motion';
import { experiences, education, skills } from '../data/portfolioData';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Work Experience
        </h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {exp.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {exp.role} | {exp.period}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">
                  {resp}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Education
        </h2>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {edu.institution}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {edu.degree} | {edu.grade}
            </p>
            <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillSection title="Tech Stack" skills={skills.techStack} />
          <SkillSection
            title="Programming Languages"
            skills={skills.programmingLanguages}
          />
          <SkillSection title="AI Technologies" skills={skills.aiTechnologies} />
        </div>
      </motion.div>
    </div>
  );
};

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Experience;