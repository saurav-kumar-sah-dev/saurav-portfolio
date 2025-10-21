import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPhone, FaClock, FaHeart } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "sauravshubham903@gmail.com",
      link: "mailto:sauravshubham903@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Send me an email anytime"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "CUTM Pkd, Odisha",
      link: null,
      color: "from-purple-500 to-pink-500",
      description: "Based in Odisha, India"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      color: "from-green-500 to-emerald-500",
      description: "Call me for urgent matters"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/saurav-kumar-sah-dev", color: "hover:text-gray-900 dark:hover:text-white", bgColor: "from-gray-600 to-gray-800" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/sauravkumarsah-dev", color: "hover:text-blue-600", bgColor: "from-blue-600 to-blue-800" },
    { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/yourusername", color: "hover:text-blue-400", bgColor: "from-blue-400 to-cyan-500" },
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
        <div className="w-full max-w-7xl mx-auto">
          {/* Enhanced Mobile Header */}
          <motion.div
            className="block md:hidden text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full shadow-xl border border-white/30 dark:border-gray-700/30 mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Get in Touch
              </span>
              <motion.div
                className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text drop-shadow-sm">
                Let's Create
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Something Amazing
              </span>
            </motion.h1>
            
            <motion.p
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Contact Form */}
            <motion.div
              className="w-full order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="w-full space-y-8 lg:space-y-12 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Desktop Header */}
              <div className="hidden md:block space-y-8">
                <motion.div
                  className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full shadow-xl border border-white/30 dark:border-gray-700/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    Get in Touch
                  </span>
                  <motion.div
                    className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text drop-shadow-sm">
                    Let's Create
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    Something Amazing
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 text-transparent bg-clip-text">
                    Together
                  </span>
                </motion.h1>

                <motion.p
                  className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Have a project in mind? I'm always open to discussing new opportunities,
                  creative ideas, or partnerships. Let's bring your vision to life with modern
                  technology and innovative solutions.
                </motion.p>
              </div>

              {/* Enhanced Contact Information Cards */}
              <motion.div
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="block p-5 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 dark:border-gray-700/30 overflow-hidden"
                      >
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        <div className="relative flex items-center gap-4">
                          <motion.div 
                            className={`p-3 sm:p-4 bg-gradient-to-br ${info.color} rounded-xl text-white shadow-lg relative overflow-hidden`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            {/* Icon glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`} />
                            <info.icon className="relative w-5 h-5 sm:w-6 sm:h-6 z-10" />
                          </motion.div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm sm:text-base">
                              {info.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">
                              {info.value}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                              {info.description}
                            </p>
                          </div>
                          
                          <motion.svg 
                            className="w-5 h-5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </motion.svg>
                        </div>
                      </a>
                    ) : (
                      <div className="group block p-5 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg transition-all duration-300 border border-white/30 dark:border-gray-700/30 overflow-hidden">
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        <div className="relative flex items-center gap-4">
                          <motion.div 
                            className={`p-3 sm:p-4 bg-gradient-to-br ${info.color} rounded-xl text-white shadow-lg relative overflow-hidden`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            {/* Icon glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`} />
                            <info.icon className="relative w-5 h-5 sm:w-6 sm:h-6 z-10" />
                          </motion.div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm sm:text-base">
                              {info.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              {info.value}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                className="p-6 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <FaHeart className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Connect With Me
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-4 sm:p-5 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20 dark:border-gray-600/20 overflow-hidden`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 500 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.bgColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                      
                      <div className="relative flex flex-col items-center gap-2">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.div>
                        <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {social.label}
                        </span>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
                        {social.label}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Quick Info */}
              <motion.div
                className="p-6 sm:p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl text-center border border-white/30 dark:border-gray-700/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <FaClock className="w-5 h-5 text-blue-500" />
                  </motion.div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300">
                    Quick Response
                  </h4>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                      Response Time:
                    </span> Usually within 24 hours
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Available for freelance projects and collaborations
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60" />
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}