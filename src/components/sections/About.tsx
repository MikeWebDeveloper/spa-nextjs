'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve with cutting-edge solutions.',
    icon: '🚀',
  },
  {
    title: 'Quality',
    description: 'Delivering excellence in every project we undertake.',
    icon: '⭐',
  },
  {
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on.',
    icon: '🤝',
  },
  {
    title: 'Support',
    description: '24/7 dedicated support for all your needs.',
    icon: '💪',
  },
];

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left side - Company Story */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Our Story
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Founded with a vision to transform the digital landscape, our company has been at the
          forefront of innovation for over a decade. We believe in creating solutions that not
          only meet today's needs but anticipate tomorrow's challenges.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our team of experts brings together diverse skills and experiences, united by a
          common goal: delivering excellence in everything we do. We're proud of our journey
          and excited about the future we're building with our clients.
        </p>
        <div className="flex gap-4 pt-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">300+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
        </div>
      </motion.div>

      {/* Right side - Features Grid */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900">
              {feature.title}
            </h4>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 