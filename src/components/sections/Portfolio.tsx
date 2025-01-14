'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/portfolio/ecommerce.jpg',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Apps',
    image: '/portfolio/banking.jpg',
    description: 'Secure and user-friendly mobile banking application.',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 3,
    title: 'Marketing Dashboard',
    category: 'Analytics',
    image: '/portfolio/dashboard.jpg',
    description: 'Comprehensive marketing analytics dashboard with real-time data.',
    technologies: ['React', 'D3.js', 'Firebase', 'Material-UI'],
    link: '#',
  },
  {
    id: 4,
    title: 'Social Media App',
    category: 'Mobile Apps',
    image: '/portfolio/social.jpg',
    description: 'Feature-rich social media application with real-time messaging.',
    technologies: ['Flutter', 'Firebase', 'WebRTC', 'GetX'],
    link: '#',
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'Web Development',
    image: '/portfolio/corporate.jpg',
    description: 'Modern corporate website with CMS integration.',
    technologies: ['Next.js', 'Sanity.io', 'Framer Motion', 'Vercel'],
    link: '#',
  },
  {
    id: 6,
    title: 'Analytics Platform',
    category: 'Analytics',
    image: '/portfolio/analytics.jpg',
    description: 'Advanced analytics platform with AI-powered insights.',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
    link: '#',
  },
];

const categories = ['All', 'Web Development', 'Mobile Apps', 'Analytics'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {/* Project Image */}
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      <span className="font-semibold block text-lg mb-2">{project.title}</span>
                      <span className="text-sm opacity-90">{project.description}</span>
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-80 bg-gray-200">
                {/* Add actual image here when available */}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  >
                    Close
                  </button>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 