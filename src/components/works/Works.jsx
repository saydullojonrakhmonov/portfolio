import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio built with React, Tailwind CSS, and framer-motion.',
    image: '/weddingHall.png',
    github: 'https://github.com/rahmonovsaydullo/weddingHall',
    demo: '#',
    tech: ['React', 'Tailwind', 'React Calendar', 'Node js', 'Express', 'PostgreSql'],
  },
  {
    title: 'Quiz app',
    description: 'A quiz app with modern styles and created with using pure JavaScript, HTML and CSS. ',
    image: '/quiz_image.png',
    github: 'https://github.com/rahmonovsaydullo/quiz',
    demo: 'https://saydullo-quiz.netlify.app/',
    tech: ['JavaScript', 'Axios', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Weather app',
    description: "A real time weather app. You can find any place or city's weather informations with understandable UI. Easy navigation no excess elements",
    image: '/weather_image.png',
    github: '#',
    demo: 'https://saydullojon-weather-app.netlify.app/',
    tech: ['JavaScript', 'Axios', 'HTML', 'CSS', 'Bootstrap'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

function MyProjects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section  className="py-24 px-6 lg:px-20 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-300">A collection of projects I've built using modern web technologies.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded dark:bg-blue-800 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Project preview"
              className="max-w-3xl w-full rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MyProjects;
