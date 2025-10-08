import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "sauravshubham903@gmail.com",
      link: "mailto:sauravshubham903@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "CUTM Pkd, Odisha",
      link: null,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/yourusername", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername", color: "hover:text-blue-600" },
    { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/yourusername", color: "hover:text-blue-400" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] lg:bg-[size:44px_44px]" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
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
          className="absolute -top-40 -right-40 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 left-1/4 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Mobile Header - Shows above form on mobile */}
          <motion.div
            className="block md:hidden text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              Get in Touch
            </motion.span>
            
            <h1 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                Let's Work Together
              </span>
            </h1>
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
              {/* Desktop Header */}
              <div className="hidden md:block space-y-6">
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get in Touch
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                </motion.span>

                <motion.h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text">
                    Let's Create
                    <br />
                    Something Amazing
                    <br />
                    Together
                  </span>
                </motion.h1>

                <motion.p
                  className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Have a project in mind? I'm always open to discussing new opportunities,
                  creative ideas, or partnerships. Let's bring your vision to life.
                </motion.p>
              </div>

              {/* Contact Information Cards */}
              <motion.div
                className="space-y-4"
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
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="group block p-5 sm:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/20"
                      >
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className={`p-3 sm:p-4 bg-gradient-to-br ${info.color} rounded-xl text-white shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm sm:text-base">
                              {info.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">
                              {info.value}
                            </p>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </a>
                    ) : (
                      <div className="group block p-5 sm:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-700/20">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className={`p-3 sm:p-4 bg-gradient-to-br ${info.color} rounded-xl text-white shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm sm:text-base">
                              {info.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 sm:p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 500 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                className="p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl text-center border border-white/20 dark:border-gray-700/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Response Time:</span> Usually within 24 hours
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}