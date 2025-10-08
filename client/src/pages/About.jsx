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

  useEffect(() => {
    fetchAbout()
      .then((res) => {
        setAbout(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
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

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20">
        <motion.div
          className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Loading spinner */}
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-t-4 border-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              Loading profile...
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!about) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20">
        <div className="text-center p-8">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Unable to load profile information.
          </p>
        </div>
      </div>
    );
  }

  const { skills, experience, achievements, certifications, currentFocus } = about;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10">
        {/* Grid pattern */}
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
            ease: "easeInOut",
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
            delay: 10,
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Profile Section */}
        <div className="mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Profile Image */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative">
                <img
                  src="/Profile-Image/profile2.jpg"
                  alt="Profile"
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-3xl object-cover shadow-2xl border-4 border-white/50 dark:border-gray-800/50"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-2xl shadow-lg">
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <span className="text-sm font-bold">Available</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Profile Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-full mb-4 shadow-lg border border-white/20 dark:border-gray-700/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaRocket className="text-blue-500" />
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Nice to meet you
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text">
                  About Me
                </span>
              </motion.h2>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am an enthusiastic and detail-oriented{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    MERN Stack Developer
                  </span>{" "}
                  dedicated to building secure, scalable, and responsive web applications.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Passionate about clean code, modern technologies, and collaborative development. I focus on
                  delivering exceptional digital experiences that combine innovation with reliability.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  >
                    <span>Get in Touch</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>

                <motion.a
                  href="/Resume/Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-gray-900 dark:text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 font-semibold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Download CV</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaCode className="text-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    What I Know
                  </span>
                </motion.div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Technical Expertise
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={skill._id}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    custom={idx}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                          <div className="text-2xl">{skillIcons[skill.category]}</div>
                        </div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">{skill.category}</h4>
                      </div>

                      <div className="space-y-2">
                        {skill.items.map((item) => (
                          <motion.div
                            key={item}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <svg
                              className="w-4 h-4 text-blue-500 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm sm:text-base">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-30" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Career Timeline
                  </span>
                </motion.div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                  Experience
                </h3>
              </div>

              <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

                <div className="space-y-12">
                  {experience.map((exp, idx) => (
                    <motion.div
                      key={exp._id}
                      className={`relative flex flex-col md:flex-row gap-8 ${
                        idx % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 z-10">
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 border-4 border-purple-500 shadow-lg" />
                        <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ml-16 md:ml-0 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                        <motion.div
                          className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20"
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative">
                            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {exp.role}
                            </h4>
                            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                              <span className="font-semibold">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4 text-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span>{exp.duration}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
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
        <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
              <div className="absolute -inset-[2px] bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl opacity-30" />

              <div className="relative p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                    <FaTrophy className="text-2xl text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 text-transparent bg-clip-text">
                    Achievements
                  </h3>
                </div>

                <div className="space-y-4">
                  {achievements.map((ach, idx) => (
                    <motion.div
                      key={ach._id}
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-white/20 dark:border-gray-700/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <h4 className="text-lg font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                          {ach.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
              <div className="absolute -inset-[2px] bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-3xl opacity-30" />

              <div className="relative p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <FaCertificate className="text-2xl text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 text-transparent bg-clip-text">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <motion.div
                      key={cert._id}
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-white/20 dark:border-gray-700/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <h4 className="text-lg font-bold text-green-700 dark:text-green-400 mb-2">{cert.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{cert.issuer}</p>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                          >
                            View Certificate
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
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
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl" />
            <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-30" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaLightbulb className="text-indigo-500" />
                  <span className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    What I'm Working On
                  </span>
                </motion.div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Current Focus
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentFocus.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-white/20 dark:border-gray-700/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-indigo-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
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
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl shadow-2xl font-bold text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download Full Resume</span>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 3, 0] }}
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