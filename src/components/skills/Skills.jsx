import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaCogs,
} from 'react-icons/fa';
import {
  SiPostgresql, SiMongodb, SiTailwindcss, SiMui, SiRedux, SiMysql, SiExpress,
} from 'react-icons/si';

const techStack = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-sky-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'MUI', icon: <SiMui className="text-blue-500" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'Zustand', icon: <FaCogs className="text-orange-400" /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-white" /> },
];

const TechStackCards = () => {
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-3">{tech.icon}</div>
            <p className="text-md font-semibold text-gray-800 dark:text-gray-100">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackCards;
