import { useEffect, useState } from "react";
import { fetchAbout } from "../api/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaCloud,
  FaTrophy,
  FaCertificate,
  FaLightbulb,
  FaRocket,
  FaCode,
} from "react-icons/fa";

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading my professional journey...");

  useEffect(() => {
    // Progressive loading messages
    const timeout1 = setTimeout(() => {
      if (loading) {
        setLoadingMessage("Gathering my skills and experience...");
      }
    }, 1500);

    const timeout2 = setTimeout(() => {
      if (loading) {
        setLoadingMessage("Almost ready! Preparing my achievements...");
      }
    }, 3000);

    const timeout3 = setTimeout(() => {
      if (loading) {
        setLoadingMessage("Taking a moment to load everything perfectly...");
      }
    }, 5000);

    fetchAbout()
      .then((res) => {
        setAbout(res.data);
        setLoading(false);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      })
      .catch((err) => {
        setLoading(false);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      });

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  const skillIcons = {
    Languages: (
      <span className="flex space-x-1">
        <motion.span
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="inline text-yellow-400"
        >
          <FaJs />
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.3, rotate: -15 }}
          className="inline text-orange-500"
        >
          <FaHtml5 />
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.3, rotate: 10 }}
          className="inline text-blue-500"
        >
          <FaCss3Alt />
        </motion.span>
      </span>
    ),
    "Frameworks/Libraries": (
      <span className="flex space-x-1">
        <motion.span
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="inline text-blue-400"
        >
          <FaReact />
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.3, rotate: -10 }}
          className="inline text-green-600"
        >
          <FaNodeJs />
        </motion.span>
      </span>
    ),
    Database: (
      <motion.span whileHover={{ scale: 1.2 }} className="inline text-green-600">
        <FaDatabase />
      </motion.span>
    ),
    Cloud: (
      <span className="flex space-x-1">
        <motion.span
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="inline text-orange-500"
        >
          <FaAws />
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="inline text-blue-400"
        >
          <FaCloud />
        </motion.span>
      </span>
    ),
    Tools: (
      <span className="flex space-x-1">
        <motion.span
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="inline text-orange-600"
        >
          <FaGitAlt />
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="inline text-pink-500"
        >
          <FaFigma />
        </motion.span>
      </span>
    ),
    "CS Fundamentals": (
      <motion.span whileHover={{ scale: 1.2 }} className="inline text-purple-600">
        <FaCode />
      </motion.span>
    ),
  };

  // Enhanced Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 p-4">
        <motion.div
          className="relative text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating particles around the card */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {/* Enhanced Icon and Title */}
            <motion.div
              className="flex flex-col items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Animated Profile Icon */}
              <motion.div
                className="relative p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.svg
                  className="relative w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </motion.svg>
              </motion.div>

              <div className="text-center">
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text mb-3"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Crafting My Profile
                </motion.h3>
                
                <motion.p
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {loadingMessage}
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Loading Animation */}
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* Main Loading Spinner */}
              <div className="relative">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-200/30 dark:border-blue-900/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 w-12 h-12 sm:w-16 sm:h-16 border-2 border-transparent border-t-pink-500 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Animated Dots */}
              <motion.div
                className="flex justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="w-full max-w-xs h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!about) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 p-4">
        <motion.div
          className="relative text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating particles around the card */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {/* Enhanced Icon and Title */}
            <motion.div
              className="flex flex-col items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Animated Profile Icon */}
              <motion.div
                className="relative p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.svg
                  className="relative w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </motion.svg>
              </motion.div>

              <div className="text-center">
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text mb-3"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Loading Profile
                </motion.h3>
                
                <motion.p
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {loadingMessage}
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Loading Animation */}
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* Main Loading Spinner */}
              <div className="relative">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-200/30 dark:border-blue-900/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 w-12 h-12 sm:w-16 sm:h-16 border-2 border-transparent border-t-pink-500 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Animated Dots */}
              <motion.div
                className="flex justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="w-full max-w-xs h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  const { skills, experience, achievements, certifications, currentFocus } = about;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Premium Background */}
      <div className="fixed inset-0 top-16 sm:top-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10">
        {/* Enhanced grid pattern with better mobile scaling */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] lg:bg-[size:64px_64px]" />

        {/* Enhanced animated gradient orbs with mobile optimization */}
        <motion.div
          className="absolute -top-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-400/10 to-transparent blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 sm:w-80 sm:h-80 lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-br from-purple-400/20 via-pink-400/10 to-transparent blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
        />

        {/* Additional floating orbs with mobile optimization */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-400/8 blur-xl sm:blur-2xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-pink-400/15 via-orange-400/10 to-yellow-400/8 blur-xl sm:blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        {/* Enhanced floating particles - responsive visibility */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 
                  ? "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-blue-400/40 to-purple-400/40" 
                  : i % 3 === 1 
                  ? "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-br from-purple-400/30 to-pink-400/30"
                  : "w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-br from-pink-400/25 to-blue-400/25"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Profile Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12">
            {/* Enhanced Profile Image */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-20 sm:opacity-25"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.35, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative">
                <motion.img
                  src="/Profile-Image/profile2.png"
                  alt="Profile"
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-2xl sm:rounded-3xl object-cover shadow-xl sm:shadow-2xl border-3 sm:border-4 border-white/60 dark:border-gray-800/60"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div 
                  className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold">Available</span>
                  </span>
                </motion.div>
                
                {/* Decorative corner elements */}
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60" />
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60" />
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-60" />
              </div>
            </motion.div>

            {/* Enhanced Profile Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full mb-4 sm:mb-6 shadow-lg sm:shadow-xl border border-white/30 dark:border-gray-700/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaRocket className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                  Nice to meet you
                </span>
                <motion.div
                  className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text drop-shadow-sm">
                  About Me
                </span>
              </motion.h2>

              <motion.div
                className="space-y-4 sm:space-y-6 mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Saurav Kumar Sah
                  </span>
                  , a{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Full-Stack Developer
                  </span>
                  {" "}passionate about building scalable, high-performance web applications with clean code, secure APIs, and modern UI/UX. I specialize in the{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    MERN stack
                  </span>
                  {" "}(MongoDB, Express.js, React.js, Node.js) to create efficient and maintainable solutions.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I also explore{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    Java and DSA
                  </span>
                  {" "}to strengthen my problem-solving and backend logic. I enjoy working on real-world projects, focusing on performance optimization, authentication, payments, and real-time features that enhance user experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full mb-4 sm:mb-6 shadow-lg sm:shadow-xl border border-white/30 dark:border-gray-700/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <FaCode className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    What I Know
                  </span>
                  <motion.div
                    className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text drop-shadow-sm">
                  Technical Expertise
                </h3>
              </div>

              {/* Mobile Layout - Stack Cards */}
              <div className="block lg:hidden">
                <div className="space-y-4">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={skill._id}
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div 
                          className="p-2 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-lg relative overflow-hidden"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="relative text-lg">{skillIcons[skill.category]}</div>
                        </motion.div>
                        <h4 className="font-bold text-base text-gray-900 dark:text-white">
                          {skill.category}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, itemIdx) => (
                          <motion.span
                            key={item}
                            className="inline-flex items-center gap-1.5 px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full text-xs text-gray-700 dark:text-gray-300 border border-blue-500/20 dark:border-blue-500/30 group/item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 300, 
                              delay: itemIdx * 0.05 
                            }}
                            whileHover={{ scale: 1.05, y: -1 }}
                          >
                            <motion.svg
                              className="w-3 h-3 text-blue-500 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </motion.svg>
                            <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                              {item}
                            </span>
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop Layout - Table */}
              <div className="hidden lg:block overflow-x-auto">
                <motion.table
                  className="w-full border-collapse"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <thead>
                    <tr className="border-b border-gray-200/30 dark:border-gray-700/30">
                      <th className="text-left py-4 px-6 text-base font-bold text-gray-900 dark:text-white">
                        Category
                      </th>
                      <th className="text-left py-4 px-6 text-base font-bold text-gray-900 dark:text-white">
                        Skills
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill, idx) => (
                      <motion.tr
                        key={skill._id}
                        className="group border-b border-gray-200/20 dark:border-gray-700/20 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <motion.div 
                              className="p-3 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-lg relative overflow-hidden"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <div className="relative text-xl">{skillIcons[skill.category]}</div>
                            </motion.div>
                            <span className="font-semibold text-base text-gray-900 dark:text-white">
                              {skill.category}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-3">
                            {skill.items.map((item, itemIdx) => (
                              <motion.span
                                key={item}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-blue-500/20 dark:border-blue-500/30 group/item"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  type: "spring", 
                                  stiffness: 300, 
                                  delay: itemIdx * 0.05 
                                }}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                <motion.svg
                                  className="w-3.5 h-3.5 text-blue-500 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </motion.svg>
                                <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                                  {item}
                                </span>
                              </motion.span>
                            ))}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </motion.table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full mb-4 sm:mb-6 shadow-lg sm:shadow-xl border border-white/30 dark:border-gray-700/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 text-transparent bg-clip-text">
                    Career Timeline
                  </span>
                  <motion.div
                    className="w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text drop-shadow-sm">
                  Experience
                </h3>
              </div>

              <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

                <div className="space-y-8 sm:space-y-12">
                  {experience.map((exp, idx) => (
                    <motion.div
                      key={exp._id}
                      className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 ${
                        idx % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-3 sm:left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 z-10">
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 border-2 sm:border-4 border-purple-500 shadow-lg" />
                        <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
                      </div>

                      {/* Enhanced Content */}
                      <div className={`flex-1 ml-12 sm:ml-16 md:ml-0 ${idx % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}>
                        <motion.div
                          className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/30 dark:border-gray-700/30 overflow-hidden"
                          whileHover={{ scale: 1.02, y: -3 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                              {exp.role}
                            </h4>
                            <div className="flex items-center gap-2 sm:gap-3 text-purple-600 dark:text-purple-400 mb-2 sm:mb-3">
                              <motion.svg 
                                className="w-4 h-4 sm:w-5 sm:h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </motion.svg>
                              <span className="font-semibold text-sm sm:text-base md:text-lg">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                              <motion.svg 
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </motion.svg>
                              <span>{exp.duration}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">{exp.description}</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements & Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
              <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

              <div className="relative p-4 sm:p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <motion.div 
                    className="p-3 sm:p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg sm:rounded-xl relative overflow-hidden"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FaTrophy className="relative text-xl sm:text-2xl md:text-3xl text-yellow-600 dark:text-yellow-400" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 text-transparent bg-clip-text drop-shadow-sm">
                    Achievements
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {achievements.map((ach, idx) => (
                    <motion.div
                      key={ach._id}
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2 sm:mb-3">
                          {ach.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                          {ach.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
              <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

              <div className="relative p-4 sm:p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <motion.div 
                    className="p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 rounded-lg sm:rounded-xl relative overflow-hidden"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FaCertificate className="relative text-xl sm:text-2xl md:text-3xl text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 text-transparent bg-clip-text drop-shadow-sm">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {certifications.map((cert, idx) => (
                    <motion.div
                      key={cert._id}
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-green-700 dark:text-green-400 mb-2 sm:mb-3">{cert.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{cert.issuer}</p>
                        {cert.link && (
                          <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-xs sm:text-sm font-medium group/link"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            View Certificate
                            <motion.svg 
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </motion.svg>
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[1px] sm:-inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-25 sm:opacity-30" />

            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full mb-4 sm:mb-6 shadow-lg sm:shadow-xl border border-white/30 dark:border-gray-700/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <FaLightbulb className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    What I'm Working On
                  </span>
                  <motion.div
                    className="w-1 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text drop-shadow-sm">
                  Current Focus
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {currentFocus.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg border border-white/30 dark:border-gray-700/30 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <motion.svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </motion.svg>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm md:text-base">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="/Resume/Resume.pdf"
            download
            className="group relative inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl font-bold text-base sm:text-lg md:text-xl overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300" />
            <span className="relative">Resume</span>
            <motion.svg
              className="w-5 h-5 sm:w-6 sm:h-6 relative"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}