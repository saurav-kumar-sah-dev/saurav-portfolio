import { useEffect, useState } from 'react';
import { fetchProjects } from '../api/api';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const ProjectCardSkeleton = () => (
  <motion.div
    className="group relative overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Card Background with glass effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-800/40 backdrop-blur-xl rounded-3xl shadow-xl" />
    
    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    
    {/* Card Content */}
    <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
      {/* Image skeleton */}
      <div className="relative aspect-[4/3] sm:aspect-video mb-4 sm:mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />

      {/* Title skeleton */}
      <div className="h-6 sm:h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl mb-3 sm:mb-4 animate-pulse" />

      {/* Description skeleton */}
      <div className="space-y-2 mb-4 sm:mb-6 flex-grow">
        <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse" />
        <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse w-3/4" />
      </div>

      {/* Tech stack skeleton */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <div className="h-6 sm:h-7 w-14 sm:w-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full animate-pulse" />
        <div className="h-6 sm:h-7 w-14 sm:w-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full animate-pulse" />
        <div className="h-6 sm:h-7 w-14 sm:w-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full animate-pulse" />
      </div>

      {/* Button skeleton */}
      <div className="h-10 sm:h-12 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl animate-pulse" />
    </div>
  </motion.div>
);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-900">
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] lg:bg-[size:44px_44px]" />
        
        {/* Enhanced animated gradient orbs */}
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
        
        {/* Floating particles for desktop */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">            
            <motion.h2
              className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text pb-2">
                My Projects
              </span>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
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

          {loading ? (
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
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </motion.div>
          ) : projects.length > 0 ? (
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
              {projects.map((project) => (
                <motion.div
                  key={project._id || project.title}
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
          ) : (
            <motion.div
              className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 max-w-md mx-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">📁</div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No projects found.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}