import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md" />
      
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content Container */}
      <div className="relative p-6 flex flex-col h-full">
        {/* Image with overlay */}
        {project.cardImageUrl && (
          <div className="relative aspect-video mb-6 rounded-xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={project.cardImageUrl}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Title with gradient effect */}
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 flex-grow">
          {project.shortDescription || project.description?.slice(0, 100) + '...'}
        </p>

        {/* Tech Stack Tags */}
        {project.techStack && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 text-sm rounded-full bg-purple-100/50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 backdrop-blur-sm">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* View Details Button */}
        <Link
          to={`/projects/${project._id}`}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]"
        >
          <span className="relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-all duration-300 dark:bg-gray-900 dark:text-white group-hover:bg-transparent group-hover:text-white">
            <span>View Details</span>
            <svg
              className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
