'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    icon: '💻',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Modern UI/UX'],
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: '📱',
    features: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your online presence and reach.',
    icon: '📈',
    features: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics'],
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services for your business needs.',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps', 'Security'],
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces with focus on user experience.',
    icon: '🎨',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Testing'],
  },
  {
    title: 'Consulting',
    description: 'Expert technology consulting to help you make informed decisions.',
    icon: '🤝',
    features: ['Tech Strategy', 'Architecture', 'Team Training', 'Best Practices'],
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
        >
          {/* Service Icon */}
          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>

          {/* Service Title */}
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            {service.title}
          </h3>

          {/* Service Description */}
          <p className="text-gray-600 mb-4">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center text-sm text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* Hover Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
} 