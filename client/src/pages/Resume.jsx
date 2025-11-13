import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaEye, FaDownload, FaCode, FaProjectDiagram, FaTrophy, FaGraduationCap, FaLaptopCode, FaRocket, FaStar, FaAward, FaUsers, FaClock } from "react-icons/fa";

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
    { name: "React.js", level: 95, color: "from-cyan-500 to-blue-500", icon: "⚛️", experience: "3+ years" },
    { name: "Node.js", level: 90, color: "from-green-500 to-emerald-500", icon: "🟢", experience: "2+ years" },
    { name: "Express.js", level: 88, color: "from-slate-700 via-gray-600 to-slate-800 dark:from-slate-400 dark:via-gray-300 dark:to-slate-500", icon: "🚂", experience: "2+ years" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-lime-600", icon: "🍃", experience: "2+ years" },
    { name: "JavaScript", level: 92, color: "from-yellow-500 to-orange-500", icon: "💛", experience: "4+ years" },
    { name: "Tailwind CSS", level: 88, color: "from-cyan-500 to-teal-500", icon: "🎨", experience: "2+ years" },
    { name: "Git/GitHub", level: 85, color: "from-orange-500 to-red-500", icon: "📚", experience: "3+ years" },
  ];

  const achievements = [
    { icon: FaProjectDiagram, count: "10+", label: "Projects Completed", color: "from-blue-500 to-purple-500", description: "Full-stack applications" },
    { icon: FaTrophy, count: "3+", label: "Awards Won", color: "from-yellow-500 to-orange-500", description: "Hackathons & competitions" },
    { icon: FaGraduationCap, count: "5+", label: "Certifications", color: "from-green-500 to-teal-500", description: "Professional certificates" },
    { icon: FaCode, count: "75K+", label: "Lines of Code", color: "from-purple-500 to-pink-500", description: "Clean & efficient code" },
    { icon: FaUsers, count: "10+", label: "Happy Clients", color: "from-indigo-500 to-blue-500", description: "Satisfied customers" },
    { icon: FaStar, count: "4.9", label: "Rating", color: "from-yellow-400 to-orange-500", description: "Client satisfaction" },
  ];

  const highlights = [
    { icon: FaLaptopCode, title: "Full Stack Development", desc: "MERN Stack Expert", color: "from-blue-500 to-cyan-500" },
    { icon: FaRocket, title: "Fast Learner", desc: "Quick to adapt new tech", color: "from-purple-500 to-pink-500" },
    { icon: FaAward, title: "Problem Solver", desc: "Creative solutions", color: "from-green-500 to-emerald-500" },
    { icon: FaClock, title: "Time Management", desc: "Efficient delivery", color: "from-orange-500 to-red-500" },
  ];

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

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full max-w-7xl mx-auto">
        <motion.div
          className="max-w-7xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Content Container - Consistent with Home page */}
          <div
            ref={ref}
            className="relative rounded-3xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-gray-700/20"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            {/* Glass Background - Consistent with Home page */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-gray-800/70 backdrop-blur-xl" />
            
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
              {/* Enhanced Header Section */}
              <div className="text-center mb-8 lg:mb-12">
                <motion.div
                  className="inline-flex items-center gap-3 px-5 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full shadow-xl border border-white/30 dark:border-gray-700/30 mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    Professional Journey
                  </span>
                  <motion.div
                    className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text drop-shadow-sm">
                    My Resume
                  </span>
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Explore my professional journey, technical expertise, and achievements. 
                  Available for viewing online or download as PDF.
                </motion.p>
              </div>

              {/* Enhanced Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.a
                  href="/Resume/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 font-semibold"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-xl group-hover:shadow-2xl transition-all duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                  </div>
                  <span className="relative flex items-center gap-3 text-gray-900 dark:text-white">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaEye className="text-lg text-blue-500" />
                    </motion.div>
                    <span className="text-sm sm:text-base font-bold">View Resume</span>
                  </span>
                </motion.a>

                <motion.a
                  href="/Resume/Resume.pdf"
                  download
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 font-semibold"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300" />
                  <span className="relative flex items-center gap-3 text-white">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaDownload className="text-lg" />
                    </motion.div>
                    <span className="text-sm sm:text-base font-bold">Download PDF</span>
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
                    <div className="absolute inset-0 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm" />
                    
                    <div className="relative">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text flex items-center gap-2">
                        <FaCode className="text-blue-500" />
                        Technical Skills
                      </h3>
                      
                      <div className="space-y-6">
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="group/skill"
                          >
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-3">
                                <span className="text-xl group-hover/skill:scale-110 transition-transform duration-300">{skill.icon}</span>
                                <div>
                                  <span className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                                    {skill.name}
                                  </span>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                                    {skill.experience}
                                  </p>
                                </div>
                              </div>
                              <motion.span 
                                className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                                whileHover={{ scale: 1.1 }}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>
                            <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                              <motion.div
                                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg relative overflow-hidden`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: 0.6 + index * 0.1, 
                                  ease: "easeOut" 
                                }}
                                whileHover={{ 
                                  scaleY: 1.2,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/skill:animate-pulse" />
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Highlights Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative p-5 sm:p-6 rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                        <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20" />
                        
                        <div className="relative flex items-center gap-4">
                          <motion.div 
                            className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${highlight.color} text-white shadow-lg relative overflow-hidden`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`} />
                            <highlight.icon className="relative text-xl sm:text-2xl z-10" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1">{highlight.title}</h4>
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
                    <div className="absolute inset-0 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm" />
                    
                    <div className="relative">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                        Achievements
                      </h3>
                      
                      <div className="space-y-4 sm:space-y-5">
                        {achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ 
                              scale: 1.05,
                              y: -3,
                              transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                            className="relative p-4 sm:p-5 rounded-xl overflow-hidden group/card cursor-pointer"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover/card:opacity-10 transition-opacity duration-300`} />
                            <div className="absolute inset-0 bg-white/15 dark:bg-gray-800/15 backdrop-blur-sm border border-white/20 dark:border-gray-700/20" />
                            
                            <div className="relative flex items-center gap-4">
                              <motion.div
                                className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${achievement.color} text-white shadow-lg relative overflow-hidden`}
                                whileHover={{ 
                                  rotate: [0, -10, 10, -10, 0],
                                  scale: 1.1,
                                  transition: { duration: 0.5 }
                                }}
                              >
                                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover/card:opacity-30 blur-lg transition-opacity duration-300`} />
                                <achievement.icon className="relative text-xl sm:text-2xl z-10" />
                              </motion.div>
                              <div className="flex-1">
                                <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-br ${achievement.color} text-transparent bg-clip-text mb-1`}>
                                  {achievement.count}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">
                                  {achievement.label}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                  {achievement.description}
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

              {/* Enhanced Bottom CTA Section */}
              <motion.div
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm text-center border border-white/30 dark:border-gray-700/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <FaRocket className="w-5 h-5 text-blue-500" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Ready to Collaborate?
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  Let's discuss your next project and bring your ideas to life with cutting-edge technology.
                </p>
                
                <motion.a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300" />
                  <span className="relative">Get in Touch</span>
                  <motion.svg 
                    className="w-5 h-5 relative" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.a>
                
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60" />
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}