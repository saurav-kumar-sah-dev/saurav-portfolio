import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUser,
  HiFolder,
  HiDocumentText,
  HiMail,
  HiSun,
  HiMoon,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <HiHome className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <HiUser className="w-5 h-5" /> },
    { name: "Projects", path: "/projects", icon: <HiFolder className="w-5 h-5" /> },
    { name: "Resume", path: "/resume", icon: <HiDocumentText className="w-5 h-5" /> },
    { name: "Contact", path: "/contact", icon: <HiMail className="w-5 h-5" /> },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Background with blur */}
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg" />

        {/* Gradient line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="group relative z-10">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Logo Icon/Circle */}
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-black text-lg sm:text-xl">S</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-50"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Logo Text */}
                <div className="hidden sm:block">
                  <div className="text-xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    Saurav Kumar
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Full Stack Developer</div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.name} to={item.path}>
                    <motion.div
                      className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-xl"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Content */}
                      <div className="relative flex items-center gap-2">
                        <motion.span
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span className="hidden xl:inline">{item.name}</span>
                      </div>

                      {/* Hover effect */}
                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}

              {/* Desktop Theme Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="relative ml-2 w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 shadow-inner"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center"
                  animate={{
                    x: darkMode ? 24 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {darkMode ? (
                    <HiMoon className="w-4 h-4 text-blue-500" />
                  ) : (
                    <HiSun className="w-4 h-4 text-yellow-500" />
                  )}
                </motion.div>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                style={{ top: "4rem" }}
              />

              {/* Mobile Menu */}
              <motion.div
                className="fixed left-0 right-0 lg:hidden overflow-hidden"
                style={{ top: "4rem" }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-2xl mx-4 mt-4 rounded-2xl overflow-hidden">
                  <nav className="p-4 space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                          >
                            <motion.div
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                                isActive
                                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                              }`}
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <motion.span
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                {item.icon}
                              </motion.span>
                              <span>{item.name}</span>
                              {isActive && (
                                <motion.div
                                  className="ml-auto"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </motion.div>
                              )}
                            </motion.div>
                          </Link>
                        </motion.div>
                      );
                    })}

                    {/* Mobile Theme Toggle */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: navItems.length * 0.05 }}
                      className="pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <button
                        onClick={() => {
                          setDarkMode(!darkMode);
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={{ rotate: darkMode ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {darkMode ? (
                              <HiMoon className="w-5 h-5 text-blue-500" />
                            ) : (
                              <HiSun className="w-5 h-5 text-yellow-500" />
                            )}
                          </motion.div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {darkMode ? "Dark Mode" : "Light Mode"}
                          </span>
                        </div>
                        <div className="w-11 h-6 rounded-full bg-gray-300 dark:bg-gray-600 relative">
                          <motion.div
                            className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md"
                            animate={{
                              x: darkMode ? 20 : 0,
                            }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        </div>
                      </button>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ✅ Spacer to push content down */}
      <div className="h-16 sm:h-20" />
    </>
  );
}