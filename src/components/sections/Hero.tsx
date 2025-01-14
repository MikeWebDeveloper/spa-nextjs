'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const backgroundPatterns = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: Math.random() * 20 + 10,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 2
}));

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Background Patterns */}
      {backgroundPatterns.map((pattern) => (
        <motion.div
          key={pattern.id}
          className="absolute rounded-full bg-blue-500/5"
          style={{
            width: pattern.size,
            height: pattern.size,
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: pattern.duration,
            repeat: Infinity,
            delay: pattern.delay,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Main Content */}
        <motion.div
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Eyebrow Text */}
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold tracking-wide uppercase"
          >
            Welcome to the Future
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900"
          >
            Transform Your Business
            <span className="block text-blue-600 mt-2">With Modern Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We deliver exceptional digital solutions that help businesses thrive in the modern world.
            Experience innovation, quality, and results that exceed expectations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { label: 'Happy Clients', value: '300+' },
              { label: 'Projects Completed', value: '500+' },
              { label: 'Team Members', value: '50+' },
              { label: 'Years Experience', value: '10+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
} 