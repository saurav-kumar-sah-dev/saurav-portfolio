import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-emerald-600" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600 to-lime-600" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-gray-600 to-gray-800" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-400 to-orange-500" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "from-purple-500 to-indigo-600" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "from-cyan-500 to-teal-500" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "from-purple-600 to-violet-700" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter", color: "hover:text-blue-400" },
];

export default function Home() {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 }
    }));
  }, [controls]);

  // Mouse parallax effect (subtle)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:60px_60px]" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-blue-400/30 via-cyan-400/20 to-transparent blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-transparent blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 10
          }}
        />

        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-indigo-400/20 via-purple-400/10 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />

        {/* Floating particles - desktop only */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full max-w-7xl mx-auto">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Badge */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full shadow-lg border border-white/20 dark:border-gray-700/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                Welcome to my portfolio
              </span>
            </div>
          </motion.div>

          {/* Main Heading with subtle parallax */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <motion.span 
                className="block bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm Saurav
              </motion.span>
              <motion.span 
                className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Kumar Sah
              </motion.span>
            </h1>

            {/* Decorative line */}
            <motion.div 
              className="flex justify-center"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="h-1 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed px-4">
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                Full Stack Developer
              </span>
              {" "}specializing in the{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                MERN Stack
              </span>
              , passionate about creating modern, scalable, and user-focused web applications.
            </p>
          </motion.div>

          {/* Social Links */}
    

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-base sm:text-lg shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">View Projects</span>
                <motion.svg 
                  className="relative w-5 h-5 sm:w-6 sm:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-gray-900 dark:text-white font-semibold text-base sm:text-lg shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Contact Me</span>
                <svg className="relative w-5 h-5 sm:w-6 sm:h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/Resume/Resume.pdf"
                download
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-gray-900 dark:text-white font-semibold text-base sm:text-lg shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Resume</span>
                <FaDownload className="relative w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            className="pt-12 sm:pt-16 lg:pt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Section Header */}
            <motion.div
              className="mb-8 sm:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-full shadow-lg border border-white/20 dark:border-gray-700/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Tech Stack & Expertise
                </h3>
              </div>
            </motion.div>

            {/* Tech Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <div className="relative">
                    {/* Icon Container */}
                    <div className="relative w-full aspect-square flex items-center justify-center rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg border border-white/20 dark:border-gray-700/20 overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Icon */}
                      <img
                        src={tech.icon}
                        alt={`${tech.name} logo`}
                        className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Label */}
                    <div className="mt-3 text-center">
                      <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                        {tech.name}
                      </span>
                    </div>

                    {/* Tooltip on desktop */}
                    <div className="hidden lg:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
                      {tech.name}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats - Fixed grid columns to 3 */}
            <motion.div
              className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                { label: "Projects", value: "10+", icon: "🚀" },
                { label: "Technologies", value: "12+", icon: "⚡" },
                { label: "Certifications", value: "5+", icon: "🏆" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg border border-white/20 dark:border-gray-700/20 text-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}