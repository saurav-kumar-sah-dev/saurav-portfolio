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
    <div className="absolute inset-0 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl" />
    
    {/* Gradient border */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20" />
    
    {/* Card Content */}
    <div className="relative p-6 h-full flex flex-col">
      {/* Image skeleton */}
      <div className="relative aspect-video mb-6 overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" />

      {/* Title skeleton */}
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse" />

      {/* Description skeleton */}
      <div className="space-y-2 mb-6 flex-grow">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4" />
      </div>

      {/* Tech stack skeleton */}
      <div className="flex gap-2 mb-6">
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
      </div>

      {/* Button skeleton */}
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]" />
        
        {/* Enhanced animated gradient orbs */}
        <motion.div 
          className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 -right-4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Added floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
              animate={{
                y: ["0vh", "100vh"],
                x: `calc(${Math.random() * 100}vw)`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16 relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.h2
              className="relative text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text animate-gradient-x">
                My Projects
              </span>
            </motion.h2>
            <motion.p
              className="relative text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore my latest works and creative endeavors
            </motion.p>
          </div>

          {loading ? (
            <motion.div
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <ProjectCardSkeleton key={i} />
              ))}
            </motion.div>
          ) : projects.length > 0 ? (
            <motion.div
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project._id || project.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 dark:text-gray-300">
                No projects found.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
