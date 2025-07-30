import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaCogs,
} from 'react-icons/fa';
import {
  SiPostgresql, SiMongodb, SiTailwindcss, SiMui, SiRedux, SiMysql, SiExpress,
} from 'react-icons/si';

const techStack = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-500 text-4xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800 text-4xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: 'MUI', icon: <SiMui className="text-blue-500 text-4xl" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500 text-4xl" /> },
  { name: 'Zustand', icon: <FaCogs className="text-orange-400 text-4xl" /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-600 text-4xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-4xl" /> },
];

const TechStackScroll = () => {
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="w-full overflow-hidden py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">My Tech Stack</h2>

      <div className="relative w-full">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              {tech.icon}
              <p className="mt-2 text-sm font-medium text-gray-800">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackScroll;
