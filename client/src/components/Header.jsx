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
  const location = useLocation(); // ✅ highlight active link

  const navItems = [
    { name: "Home", path: "/", icon: <HiHome className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <HiUser className="w-5 h-5" /> },
    { name: "Projects", path: "/projects", icon: <HiFolder className="w-5 h-5" /> },
    { name: "Resume", path: "/resume", icon: <HiDocumentText className="w-5 h-5" /> },
    { name: "Contact", path: "/contact", icon: <HiMail className="w-5 h-5" /> },
  ];

  const iconHover = { scale: 1.2, rotate: 10 };
  const textHover = { x: 5 };

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-md sticky top-0 z-50 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
        >
          Saurav Kumar Sah
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center transition-colors ${
                  active
                    ? "text-blue-500 dark:text-blue-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <motion.span whileHover={iconHover} className="mr-1">
                  {item.icon}
                </motion.span>
                <motion.span whileHover={textHover}>{item.name}</motion.span>
              </Link>
            );
          })}

          {/* Theme toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="mr-2"
              animate={{ rotate: darkMode ? -360 : 360 }}
              transition={{ duration: 0.6 }}
            >
              {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </motion.span>
            {darkMode ? "Light" : "Dark"}
          </motion.button>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 shadow-xl z-40 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center py-4 space-y-3">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-lg flex items-center transition-colors ${
                      active
                        ? "text-blue-500 dark:text-blue-400 font-semibold"
                        : "hover:text-blue-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span whileHover={iconHover} className="mr-1">
                      {item.icon}
                    </motion.span>
                    <motion.span whileHover={textHover}>{item.name}</motion.span>
                  </Link>
                );
              })}

              {/* Mobile theme toggle */}
              <motion.button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsOpen(false);
                }}
                className="px-6 py-2 mt-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="mr-2"
                  animate={{ rotate: darkMode ? -360 : 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
                </motion.span>
                {darkMode ? "Light" : "Dark"}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
