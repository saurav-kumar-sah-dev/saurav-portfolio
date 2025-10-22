import { useEffect, useState } from 'react';
import { fetchProjects } from '../api/api';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const ProjectCardSkeleton = () => (
  <motion.div
    className="group relative overflow-hidden h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {/* Enhanced Card Background with glass effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-800/40 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20" />
    
    {/* Animated gradient border */}
    <motion.div 
      className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm"
      animate={{
        background: [
          "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
          "linear-gradient(45deg, #ec4899, #3b82f6, #8b5cf6)",
          "linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)"
        ]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Shimmer effect overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    
    {/* Card Content */}
    <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
      {/* Enhanced Image skeleton */}
      <motion.div 
        className="relative aspect-[4/3] sm:aspect-video mb-4 sm:mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200/80 to-gray-300/80 dark:from-gray-700/80 dark:to-gray-600/80"
        animate={{
          background: [
            "linear-gradient(45deg, #e5e7eb, #d1d5db)",
            "linear-gradient(45deg, #d1d5db, #e5e7eb)",
            "linear-gradient(45deg, #e5e7eb, #d1d5db)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Animated placeholder icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Enhanced Title skeleton */}
      <motion.div 
        className="h-6 sm:h-8 bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-gray-700/80 dark:to-gray-600/80 rounded-xl mb-3 sm:mb-4"
        animate={{
          background: [
            "linear-gradient(90deg, #e5e7eb, #d1d5db, #e5e7eb)",
            "linear-gradient(90deg, #d1d5db, #e5e7eb, #d1d5db)"
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Enhanced Description skeleton */}
      <div className="space-y-2 mb-4 sm:mb-6 flex-grow">
        <motion.div 
          className="h-3 sm:h-4 bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-gray-700/80 dark:to-gray-600/80 rounded-lg"
          animate={{
            background: [
              "linear-gradient(90deg, #e5e7eb, #d1d5db, #e5e7eb)",
              "linear-gradient(90deg, #d1d5db, #e5e7eb, #d1d5db)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div 
          className="h-3 sm:h-4 bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-gray-700/80 dark:to-gray-600/80 rounded-lg w-3/4"
          animate={{
            background: [
              "linear-gradient(90deg, #e5e7eb, #d1d5db, #e5e7eb)",
              "linear-gradient(90deg, #d1d5db, #e5e7eb, #d1d5db)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>

      {/* Enhanced Tech stack skeleton */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            className="h-6 sm:h-7 w-14 sm:w-16 bg-gradient-to-r from-blue-100/60 to-purple-100/60 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full"
            animate={{
              background: [
                "linear-gradient(45deg, #dbeafe, #e0e7ff)",
                "linear-gradient(45deg, #e0e7ff, #dbeafe)"
              ]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.2 
            }}
          />
        ))}
      </div>

      {/* Enhanced Button skeleton */}
      <motion.div 
        className="h-10 sm:h-12 bg-gradient-to-r from-blue-100/60 to-purple-100/60 dark:from-blue-900/40 dark:to-purple-900/40 rounded-2xl"
        animate={{
          background: [
            "linear-gradient(90deg, #dbeafe, #e0e7ff, #dbeafe)",
            "linear-gradient(90deg, #e0e7ff, #dbeafe, #e0e7ff)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </motion.div>
);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Preparing my portfolio showcase...");

  useEffect(() => {
    // Set multiple timeouts to show progressive loading messages
    const timeout1 = setTimeout(() => {
      if (loading) {
        setLoadingMessage("Loading my creative works...");
      }
    }, 1500);

    const timeout2 = setTimeout(() => {
      if (loading) {
        setLoadingMessage("Almost there! Fetching my project details...");
      }
    }, 3000);

    const timeout3 = setTimeout(() => {
      if (loading) {
        setLoadingMessage("Taking a moment to load everything perfectly...");
      }
    }, 5000);

    const timeout4 = setTimeout(() => {
      if (loading) {
        setLoadingMessage("Still loading... This might take a moment on slower connections.");
      }
    }, 8000);

    fetchProjects()
      .then(res => {
        // Handle both direct array response and wrapped response
        const projectsData = Array.isArray(res.data) ? res.data : (res.data.data || res.data);
        setProjects(projectsData || []);
      })
      .catch(err => {
        // Keep projects array empty and continue showing loading
        setProjects([]);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
      });

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Background - Consistent with Home page */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10">
        {/* Standardized grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px] lg:bg-[size:64px_64px]" />
        
        {/* Standardized animated gradient orbs */}
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-br from-blue-400/25 via-cyan-400/15 to-transparent blur-3xl"
          animate={{ 
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-br from-purple-400/25 via-pink-400/15 to-transparent blur-3xl"
          animate={{ 
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 12
          }}
        />

        {/* Additional floating orbs */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-indigo-400/15 to-purple-400/10 blur-2xl"
          animate={{ 
            x: [0, 60, -40, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        />

        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-pink-400/20 via-orange-400/15 to-yellow-400/10 blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 8
          }}
        />

        {/* Enhanced floating particles - desktop only */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 
                  ? "w-2 h-2 bg-gradient-to-br from-blue-400/60 to-purple-400/60" 
                  : i % 3 === 1 
                  ? "w-1.5 h-1.5 bg-gradient-to-br from-purple-400/50 to-pink-400/50"
                  : "w-1 h-1 bg-gradient-to-br from-pink-400/40 to-blue-400/40"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Standardized Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full mb-6 shadow-xl border border-white/30 dark:border-gray-700/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </motion.div>
              <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Portfolio Showcase
              </span>
              <motion.div
                className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.h2
              className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text drop-shadow-sm">
                My Projects
              </span>
            </motion.h2>
            <motion.p
              className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore my latest works and creative endeavors
            </motion.p>
          </div>


          {/* Always show projects if we have them, regardless of loading state */}
          {projects.length > 0 && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project._id || project.title || index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}


          {/* Enhanced Loading State */}
          {projects.length === 0 && (
            <motion.div
              className="flex flex-col items-center justify-center min-h-[70vh] space-y-8 sm:space-y-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Enhanced Loading Card */}
              <motion.div
                className="relative text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                      "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating particles around the card */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Enhanced Icon and Title */}
                  <motion.div
                    className="flex flex-col items-center gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {/* Animated Portfolio Icon */}
                    <motion.div
                      className="relative p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      
                      <motion.svg
                        className="relative w-8 h-8 sm:w-10 sm:h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </motion.svg>
                    </motion.div>

                    <div className="text-center">
                      <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text mb-3"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        Crafting My Portfolio
                      </motion.h3>
                      
                      <motion.p
                        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {loadingMessage}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Enhanced Loading Animation */}
                  <motion.div
                    className="flex flex-col items-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {/* Main Loading Spinner */}
                    <div className="relative">
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-200/30 dark:border-blue-900/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute inset-2 w-12 h-12 sm:w-16 sm:h-16 border-2 border-transparent border-t-pink-500 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    {/* Animated Dots */}
                    <motion.div
                      className="flex justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                            y: [0, -8, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Progress Bar */}
                    <motion.div
                      className="w-full max-w-xs h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Skeleton Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  >
                    <ProjectCardSkeleton />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}