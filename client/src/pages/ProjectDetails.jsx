import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProjectById } from "../api/api";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      .catch((err) => console.error("Error loading project:", err))
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

  if (loading) return <LoadingPlaceholder />;
  if (!project) return <ProjectNotFound />;

  const images = project.images || [];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="relative max-w-6xl mx-auto px-4 py-12 space-y-8"
      >
        <BackButton />

        <motion.div className="relative overflow-hidden rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-8">
          {/* Images Carousel */}
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video rounded-xl overflow-hidden mb-4 group ring-1 ring-black/5 dark:ring-white/10 shadow-2xl"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Carousel Navigation */}
              {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}

          {/* Carousel Pagination */}
          {images.length > 1 && (
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-blue-500 w-4"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-400"
                    }`}
                  />
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={currentImageIndex}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                Image {currentImageIndex + 1} of {images.length}
              </motion.p>
            </div>
          )}

          <ProjectContent project={project} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// Components
const BackButton = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
  >
    <motion.div
      whileHover={{ x: -5 }}
      className="inline-block"
    >
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-blue-500/10 dark:border-blue-400/10 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group shadow-sm hover:shadow-md"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </motion.div>
        <span className="font-medium">Back to Projects</span>
      </Link>
    </motion.div>
  </motion.div>
);

const LoadingPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <motion.div
      className="relative p-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
        animate={{
          x: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative flex flex-col items-center gap-6">
        {/* Animated placeholder image */}
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading spinner */}
        <div className="relative w-12 h-12">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-t-4 border-r-4 border-blue-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-purple-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-t-4 border-r-4 border-purple-500"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading project details...
        </motion.p>
      </div>
    </motion.div>
  </div>
);

const ProjectNotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <motion.div className="p-8 bg-white/30 dark:bg-gray-800/30 rounded-2xl max-w-md w-full shadow-xl">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Project Not Found</h3>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Back to Projects
        </Link>
      </div>
    </motion.div>
  </div>
);

const ProjectContent = ({ project }) => (
  <>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent tracking-tight leading-tight relative"
    >
      <motion.span
        className="absolute -inset-x-6 -inset-y-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      <span className="relative">{project.title}</span>
    </motion.h1>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="prose prose-lg dark:prose-invert max-w-none mb-12 space-y-6"
    >
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg md:text-xl font-medium">
        {project.description}
      </p>
    </motion.div>

    {project.techStack?.length > 0 && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-blue-500/10 dark:border-blue-400/10"
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
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Features
        </h3>
        <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
          {project.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-2 group"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300" />
              <span className="group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
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
      className="flex flex-wrap gap-4"
    >
      {project.demoLink && (
        <motion.a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>View Live Demo</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
      )}
      {project.repoLink && (
        <motion.a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl border border-black/5 dark:border-white/5"
        >
          <span>View Source Code</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </motion.a>
      )}
    </motion.div>
  </>
);
