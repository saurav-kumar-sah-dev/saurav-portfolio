import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaEye, FaDownload, FaCode, FaProjectDiagram, FaTrophy, FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function Resume() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const skills = [
    { name: "React.js", level: 95, color: "from-cyan-500 to-blue-500", icon: "⚛️" },
    { name: "Node.js", level: 90, color: "from-green-500 to-emerald-500", icon: "🟢" },
    { name: "Express.js", level: 88, color: "from-slate-700 via-gray-600 to-slate-800 dark:from-slate-400 dark:via-gray-300 dark:to-slate-500", icon: "🚂" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-lime-600", icon: "🍃" },
    { name: "JavaScript", level: 92, color: "from-yellow-500 to-orange-500", icon: "💛" },
    { name: "Tailwind CSS", level: 88, color: "from-cyan-500 to-teal-500", icon: "🎨" },
  ];

  const achievements = [
    { icon: FaProjectDiagram, count: "10+", label: "Projects Completed", color: "from-blue-500 to-purple-500" },
    { icon: FaTrophy, count: "2+", label: "Awards Won", color: "from-yellow-500 to-orange-500" },
    { icon: FaGraduationCap, count: "4+", label: "Certifications", color: "from-green-500 to-teal-500" },
    { icon: FaCode, count: "50K+", label: "Lines of Code", color: "from-purple-500 to-pink-500" },
  ];

  const highlights = [
    { icon: FaLaptopCode, title: "Full Stack Development", desc: "MERN Stack Expert" },
    { icon: FaRocket, title: "Fast Learner", desc: "Quick to adapt new tech" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] lg:bg-[size:44px_44px]" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 lg:w-[500px] lg:h-[500px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 lg:w-[500px] lg:h-[500px]"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* Floating particles - desktop only */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.5, 0],
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

      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          className="max-w-7xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Content Container */}
          <div
            ref={ref}
            className="relative rounded-3xl overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/30 dark:from-gray-900/70 dark:via-gray-900/50 dark:to-gray-900/30 backdrop-blur-xl" />
            
            {/* Animated gradient border */}
            <motion.div 
              className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl"
              animate={{
                opacity: isHovered ? 0.5 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content with subtle transform */}
            <motion.div 
              className="relative p-6 sm:p-8 lg:p-12"
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Header Section */}
              <div className="text-center mb-8 lg:mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Professional Journey
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text">
                    My Resume
                  </span>
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Explore my professional journey, technical expertise, and achievements. 
                  Available for viewing online or download.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.a
                  href="/Resume/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-6 py-4 font-semibold"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl transition-all duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                  </div>
                  <span className="relative flex items-center gap-3 text-gray-900 dark:text-white">
                    <FaEye className="text-lg text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base">View Resume</span>
                  </span>
                </motion.a>

                <motion.a
                  href="/Resume/Resume.pdf"
                  download
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-6 py-4 font-semibold"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="relative flex items-center gap-3 text-white">
                    <FaDownload className="text-lg group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base">Download PDF</span>
                  </span>
                </motion.a>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                {/* Skills Section - Spans 2 columns on desktop */}
                <motion.div
                  className="lg:col-span-2 space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    className="relative p-6 rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 group-hover:from-blue-500/10 group-hover:to-purple-500/10 dark:group-hover:from-blue-500/20 dark:group-hover:to-purple-500/20 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm" />
                    
                    <div className="relative">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text flex items-center gap-2">
                        <FaCode className="text-blue-500" />
                        Technical Skills
                      </h3>
                      
                      <div className="space-y-5">
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="group/skill"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors flex items-center gap-2">
                                <span className="text-lg">{skill.icon}</span>
                                {skill.name}
                              </span>
                              <motion.span 
                                className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold"
                                whileHover={{ scale: 1.1 }}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>
                            <div className="relative h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                              <motion.div
                                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ 
                                  duration: 1.2, 
                                  delay: 0.6 + index * 0.1, 
                                  ease: "easeOut" 
                                }}
                                whileHover={{ 
                                  scaleY: 1.2,
                                  transition: { duration: 0.2 }
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Highlights Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="relative p-5 rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 dark:group-hover:from-indigo-500/20 dark:group-hover:to-purple-500/20 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm" />
                        
                        <div className="relative flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg">
                            <highlight.icon className="text-2xl" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{highlight.title}</h4>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{highlight.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    className="relative p-6 rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 group-hover:from-purple-500/10 group-hover:to-pink-500/10 dark:group-hover:from-purple-500/20 dark:group-hover:to-pink-500/20 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm" />
                    
                    <div className="relative">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                        Achievements
                      </h3>
                      
                      <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ 
                              scale: 1.05,
                              transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                            className="relative p-4 rounded-xl overflow-hidden group/card cursor-pointer"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover/card:opacity-10 transition-opacity duration-300`} />
                            <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20" />
                            
                            <div className="relative flex items-center gap-4">
                              <motion.div
                                className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white shadow-lg`}
                                whileHover={{ 
                                  rotate: [0, -10, 10, -10, 0],
                                  transition: { duration: 0.5 }
                                }}
                              >
                                <achievement.icon className="text-xl" />
                              </motion.div>
                              <div className="flex-1">
                                <div className={`text-2xl font-black bg-gradient-to-br ${achievement.color} text-transparent bg-clip-text`}>
                                  {achievement.count}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                  {achievement.label}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom CTA Section */}
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm text-center border border-white/20 dark:border-gray-700/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Interested in working together?
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}