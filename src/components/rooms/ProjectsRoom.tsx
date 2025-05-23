import React from 'react'
import { motion } from 'framer-motion'

const ProjectsRoom: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: '3D E-commerce Platform',
      description: 'Interactive 3D product visualization platform built with Three.js and React.',
      technologies: ['React', 'Three.js', 'Node.js', 'MongoDB'],
      image: '/project1.jpg',
      demo: '#',
      github: '#',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 2,
      title: 'Virtual Art Gallery',
      description: 'Immersive virtual gallery experience with WebXR support for VR headsets.',
      technologies: ['WebXR', 'A-Frame', 'Express', 'PostgreSQL'],
      image: '/project2.jpg',
      demo: '#',
      github: '#',
      color: 'from-pink-600 to-red-600'
    },
    {
      id: 3,
      title: 'AI-Powered Portfolio',
      description: 'Smart portfolio website with AI-driven content recommendations.',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Vercel'],
      image: '/project3.jpg',
      demo: '#',
      github: '#',
      color: 'from-green-600 to-teal-600'
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl">
          A collection of my recent work showcasing modern web technologies and creative solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
            className="group relative"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 pointer-events-auto">
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.demo}
                    className="flex-1 text-center py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    className="flex-1 text-center py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-12 text-center pointer-events-auto"
      >
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
        </motion.button>
      </motion.div>
    </div>
  )
}

export default ProjectsRoom
