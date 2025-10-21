import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProjectById } from "../api/api";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [linkLoading, setLinkLoading] = useState({ demo: false, repo: false });

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    fetchProjectById(id)
      .then((res) => {
        const p = res.data;
        const images =
          p.imageUrls?.length > 0
            ? p.imageUrls
            : p.imageUrl
            ? [p.imageUrl]
            : [];
        setProject({ ...p, images });
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, [id]);

  const handlePrev = () => {
    if (!project?.images?.length) return;
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNext = () => {
    if (!project?.images?.length) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleLinkClick = (type) => {
    setLinkLoading(prev => ({ ...prev, [type]: true }));
    // Reset loading state after a delay to show the loading animation
    setTimeout(() => {
      setLinkLoading(prev => ({ ...prev, [type]: false }));
    }, 2000);
  };

  if (loading) return <LoadingPlaceholder />;
  if (!project) return <ProjectNotFound />;

  const images = project.images || [];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-900"
    >
      {/* Background decoration */}
      <div className="fixed inset-0 top-16 sm:top-20 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 lg:w-96 lg:h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-6 sm:space-y-8"
      >
        <BackButton />

        <motion.div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6 lg:p-10">
          {/* Images Carousel - Full width display without cutting */}
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mb-6 sm:mb-8 lg:mb-10"
            >
              {/* Main Image Container */}
              <div
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-xl group"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-video"
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={`${project.title} ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>

                {/* Enhanced Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePrev}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNext}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </>
                )}
              </div>

              {/* Enhanced Carousel Indicators */}
              {images.length > 1 && (
                <div className="flex flex-col items-center gap-3 mt-4 sm:mt-6">
                  <div className="flex gap-2">
                    {images.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`transition-all duration-300 ${
                          index === currentImageIndex
                            ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full"
                        }`}
                      />
                    ))}
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={currentImageIndex}
                    className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium"
                  >
                    {currentImageIndex + 1} / {images.length}
                  </motion.p>
                </div>
              )}
            </motion.div>
          )}

          <ProjectContent project={project} linkLoading={linkLoading} handleLinkClick={handleLinkClick} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// Enhanced Back Button Component
const BackButton = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
  >
    <Link
      to="/projects"
      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50"
    >
      <motion.svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ x: 0 }}
        whileHover={{ x: -3 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </motion.svg>
      <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
        Back to Projects
      </span>
    </Link>
  </motion.div>
);

// Enhanced Loading Component
const LoadingPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-900 px-4">
    <motion.div
      className="relative p-8 sm:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Enhanced Loading Animation */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-900"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-t-4 border-blue-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-purple-200 dark:border-purple-900"
          />
          <motion.div
            className="absolute inset-2 rounded-full border-t-4 border-purple-500"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading project details...
        </motion.p>
      </div>
    </motion.div>
  </div>
);

// Enhanced Not Found Component
const ProjectNotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-900 px-4">
    <motion.div 
      className="p-8 sm:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl max-w-md w-full shadow-2xl text-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Project Not Found
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        The project you're looking for doesn't exist.
      </p>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold"
      >
        Back to Projects
      </Link>
    </motion.div>
  </div>
);

// Enhanced Project Content Component
const ProjectContent = ({ project, linkLoading, handleLinkClick }) => (
  <>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight"
    >
      {project.title}
    </motion.h1>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="prose prose-base sm:prose-lg lg:prose-xl dark:prose-invert max-w-none mb-8 sm:mb-10"
    >
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.description}
      </p>
    </motion.div>

    {project.techStack?.length > 0 && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8"
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.techStack.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-blue-200/50 dark:border-blue-700/50 text-sm sm:text-base font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    )}

    {project.features?.length > 0 && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6 sm:mb-8"
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Key Features
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          {project.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="flex items-start gap-3 group"
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-150 transition-transform duration-300 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    )}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
    >
      {project.demoLink && (
        <motion.a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('demo')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-sm sm:text-base relative overflow-hidden"
        >
          {linkLoading.demo && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )}
          <span className={linkLoading.demo ? "opacity-0" : "opacity-100 transition-opacity"}>View Live Demo</span>
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${linkLoading.demo ? "opacity-0" : "opacity-100"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
      )}
      {project.repoLink && (
        <motion.a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick('repo')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-2xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 font-semibold text-sm sm:text-base relative overflow-hidden"
        >
          {linkLoading.repo && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-5 h-5 border-2 border-gray-400/30 border-t-gray-600 dark:border-gray-300/30 dark:border-t-gray-200 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )}
          <span className={linkLoading.repo ? "opacity-0" : "opacity-100 transition-opacity"}>View Source Code</span>
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform ${linkLoading.repo ? "opacity-0" : "opacity-100"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </motion.a>
      )}
    </motion.div>
  </>
);