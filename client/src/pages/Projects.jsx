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
  const [loadingMessage, setLoadingMessage] = useState("Preparing my portfolio showcase...");
  const [apiError, setApiError] = useState(null);
  const [showFallback, setShowFallback] = useState(false);

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
        setShowFallback(true); // Show fallback content after 8 seconds
      }
    }, 8000);

    fetchProjects()
      .then(res => {
        // Handle both direct array response and wrapped response
        const projectsData = Array.isArray(res.data) ? res.data : (res.data.data || res.data);
        setProjects(projectsData || []);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        const errorMessage = err.response?.status === 404 
          ? 'Backend server not found. Please check if the server is deployed.'
          : err.code === 'ECONNREFUSED'
          ? 'Cannot connect to backend server. Please check your deployment.'
          : err.message || 'Failed to fetch projects';
        setApiError(errorMessage);
        setLoadingMessage("Having trouble loading projects. Please try refreshing the page.");
        // Set sample projects for demo purposes if API fails
        setProjects([
          {
            _id: 'demo-1',
            title: 'Sample Project 1',
            shortDescription: 'This is a sample project to demonstrate the portfolio structure.',
            cardImageUrl: '/images/ecommerce.png',
            techStack: ['React', 'Node.js', 'MongoDB'],
            demoLink: '#',
            repoLink: '#'
          },
          {
            _id: 'demo-2',
            title: 'Sample Project 2',
            shortDescription: 'Another sample project showing the portfolio layout.',
            cardImageUrl: '/images/ecommerce.png',
            techStack: ['JavaScript', 'Express', 'MySQL'],
            demoLink: '#',
            repoLink: '#'
          }
        ]);
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

          {/* Show fallback content if loading takes too long */}
          {showFallback && loading && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 max-w-lg mx-auto shadow-2xl border border-white/20 dark:border-gray-700/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-2">
                  Quick Preview Available
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  While we're loading my full portfolio, here's a quick preview of what's coming...
                </p>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </motion.div>
              
              {/* Show skeleton cards as preview */}
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
                {[1, 2, 3].map((i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </motion.div>
            </motion.div>
          )}

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

          {/* Show loading state only if loading and no projects */}
          {loading && projects.length === 0 && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Loading Message */}
              <motion.div
                className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 max-w-lg mx-auto shadow-2xl border border-white/20 dark:border-gray-700/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <motion.div
                    className="w-8 h-8 border-3 border-blue-200 dark:border-blue-900 border-t-blue-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Crafting My Portfolio
                </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {loadingMessage}
                </p>
                <motion.div
                  className="mt-4 flex justify-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Skeleton Cards */}
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
            </motion.div>
          )}

          {/* Show no projects message only if not loading and no projects */}
          {!loading && projects.length === 0 && (
            <motion.div
              className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 max-w-md mx-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">📁</div>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                {apiError ? 'Unable to load projects from server.' : 'No projects found.'}
              </p>
              {apiError && (
                <div className="mb-4">
                  <p className="text-sm text-red-500 dark:text-red-400 mb-4">
                    Error: {apiError}
                  </p>
                  <button
                    onClick={() => {
                      setLoading(true);
                      setApiError(null);
                      setLoadingMessage("Retrying to load my projects...");
                      // Retry the fetch
                      fetchProjects()
                        .then(res => {
                          const projectsData = Array.isArray(res.data) ? res.data : (res.data.data || res.data);
                          setProjects(projectsData || []);
                        })
                        .catch(err => {
                          console.error('Error fetching projects on retry:', err);
                          setApiError(err.message || 'Failed to fetch projects');
                        })
                        .finally(() => setLoading(false));
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Retry
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}