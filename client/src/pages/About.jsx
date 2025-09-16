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
} from "react-icons/fa";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetchAbout()
      .then((res) => setAbout(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!about)
    return (
      <p className="p-8 text-center text-gray-500 dark:text-gray-400">
        Loading...
      </p>
    );

  const { skills, experience, achievements, certifications, currentFocus } =
    about;

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
      <motion.span whileHover={{ scale: 1.2 }} className="inline text-gray-700">
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
    "CS Fundamentals": null,
  };


  return (
    <section className="relative py-16 px-4 sm:px-8 lg:p-12 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl rounded-2xl my-12 transition-colors overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />

      {/* Profile Section */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16">
        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative flex-shrink-0"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30 -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <img
            src="/Profile-Image/profile2.jpg"
            alt="Profile"
            className="
              w-48 h-48 md:w-64 md:h-64 
              rounded-2xl object-cover shadow-2xl 
              ring-4 ring-offset-4 ring-blue-500/50 dark:ring-purple-500/50
              transition-all duration-300
              hover:ring-offset-8
            "
          />
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-50"
            style={{ filter: "blur(20px)" }}
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Profile Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.span
            className="inline-block text-sm uppercase tracking-wider font-semibold text-blue-500 dark:text-blue-400 mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Nice to meet you
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 
                       bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                       dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            About Me
          </motion.h2>

          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
  I am an enthusiastic and detail-oriented <span className="font-semibold text-blue-600 dark:text-blue-400">MERN Stack Developer</span> dedicated to building 
  secure, scalable, and responsive web applications.
</p>
<p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
  Passionate about clean code, modern technologies, and collaborative development. I focus on delivering 
  exceptional digital experiences that combine innovation with reliability.
</p>


          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>
                <Link to={'/contact'}>Get in Touch</Link>
              </span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/Resume/Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <span>Download CV</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Skills */}
      <div className="relative mb-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
       
        
        <motion.div 
          className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Technical Expertise
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill._id}
                className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300
                           hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
              >
                
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl">
                    {skillIcons[skill.category]}
                  </div>
                  <h4 className="font-semibold text-xl text-gray-900 dark:text-gray-100">
                    {skill.category}
                  </h4>
                </div>
                
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      

      {/* Experience */}
      <div className="relative mb-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl"
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
             Experience
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            {experience.map((exp, idx) => (
              <motion.div
                key={exp._id}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-purple-500" />
                  <div className="absolute inset-0 rounded-full bg-blue-500 dark:bg-purple-500 animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300
                               hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-purple-500/5">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    <div className="relative">
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400 mb-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{exp.duration}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements & Certifications */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Achievements Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl"
            animate={{
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8">
            <motion.h3
              className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3"
              variants={fadeUp}
            >
              <FaTrophy className="text-yellow-500 w-8 h-8" />
              Achievements
            </motion.h3>

            <div className="space-y-6">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={ach._id}
                  className="group relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg
                             hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                  variants={fadeUp}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative">
                    <h4 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                      {ach.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"
            animate={{
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8">
            <motion.h3
              className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3"
              variants={fadeUp}
            >
              <FaCertificate className="text-purple-500 w-8 h-8" />
              Certifications
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert._id}
                  className="group relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg
                             hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                  variants={fadeUp}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative">
                    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {cert.issuer}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        View Certificate
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>


      {/* Current Focus */}
      <div className="relative mb-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-3xl"
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3"
            variants={fadeUp}
          >
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Current Focus
          </motion.h3>

          <div className="grid gap-4">
            {currentFocus.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg
                           hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Resume CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="/Resume/Resume.pdf"
          download
          className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <span>Download Full Resume</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
