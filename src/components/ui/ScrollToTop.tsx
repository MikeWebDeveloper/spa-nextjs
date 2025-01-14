'use client';

import { useEffect, useState, useCallback } from 'react';

export default function ScrollToTop() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll threshold reduced to 200px for earlier appearance
  const SCROLL_THRESHOLD = 200;

  const handleScroll = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calculate scroll progress percentage
    const progress = (scrolled / height) * 100;
    setScrollProgress(Math.min(progress, 100));

    // Show button based on threshold
    setVisible(scrolled > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    setMounted(true);
    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!mounted) return null;

  return (
    <>
      {visible && (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2">
          {/* Progress indicator */}
          {isHovering && (
            <div className="text-sm text-gray-600 bg-white px-2 py-1 rounded-md shadow-sm animate-fade-in">
              {Math.round(scrollProgress)}% scrolled
            </div>
          )}
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            type="button"
            aria-label="Scroll to top"
            className="group relative p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-fade-slide-up"
            style={{
              transform: `scale(${isHovering ? 1.1 : 1})`,
            }}
          >
            {/* Progress circle */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                className="text-blue-800 opacity-20"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
              <circle
                className="text-white transition-all duration-300 ease-in-out"
                strokeWidth="8"
                strokeDasharray={264}
                strokeDashoffset={264 - (264 * scrollProgress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
            </svg>
            
            {/* Arrow icon */}
            <svg
              className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
} 