import React from 'react'
import { motion } from 'framer-motion'

const AboutRoom: React.FC = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Three.js/WebGL', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'TypeScript', level: 90, color: 'from-indigo-500 to-blue-500' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', level: 75, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <div className="flex items-center justify-center h-full px-8">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className="space-y-4 text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p>
              I'm a passionate full-stack developer with a love for creating 
              immersive digital experiences. With over 5 years of experience 
              in web development, I specialize in React, Three.js, and modern 
              web technologies.
            </p>
            
            <p>
              My journey started with traditional web development, but I found 
              my true calling in 3D web experiences. I believe that the future 
              of the web lies in creating interactive, engaging, and visually 
              stunning applications.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or experimenting with 
              creative coding and generative art.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Skills & Expertise</h3>
          
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/20 pointer-events-auto"
          >
            <h4 className="text-xl font-semibold text-white mb-3">Currently Learning</h4>
            <div className="flex flex-wrap gap-2">
              {['WebXR', 'AI/ML', 'Blockchain', 'Rust'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutRoom
