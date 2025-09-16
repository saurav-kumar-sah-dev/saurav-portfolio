import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }, // ✅ Added Bootstrap
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, // ✅ Updated Tailwind
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
];

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);
  return (
    <section className="relative py-16 px-4 sm:px-8 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Background floating gradients */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-300/30 via-purple-400/30 to-pink-300/30 dark:from-blue-600/30 dark:via-purple-500/30 dark:to-pink-500/30 opacity-40 blur-3xl"
        initial={{ x: -200, y: -200, scale: 0.8 }}
        animate={{ 
          x: 200, 
          y: 200, 
          scale: 1.2,
          rotate: 180
        }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 15,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-purple-300/30 via-pink-400/30 to-blue-300/30 dark:from-purple-600/30 dark:via-pink-500/30 dark:to-blue-500/30 opacity-40 blur-3xl"
        initial={{ x: 100, y: 100, scale: 1.2 }}
        animate={{ 
          x: -100, 
          y: -100, 
          scale: 0.8,
          rotate: -180
        }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 20,
          ease: "easeInOut"
        }}
      />
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -left-1/4 top-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          animate={{
            rotate: [45, 50, 45],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -right-1/4 bottom-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          animate={{
            rotate: [-45, -40, -45],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.span
        className="text-sm uppercase tracking-wider font-semibold text-blue-500 dark:text-blue-400 mb-4 block text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Welcome to my portfolio
      </motion.span>

      <motion.div className="space-y-4 mb-8">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                     dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="block">Hi, I'm Saurav</span>
          <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl">Kumar Sah</span>
        </motion.h1>

        <motion.div 
          className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium mb-6 text-center max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-lg text-gray-700 dark:text-gray-300">
  <span className="text-blue-600 dark:text-blue-400">Full Stack Developer</span> specializing in the 
  <span className="text-blue-600 dark:text-blue-400"> MERN Stack</span>, passionate about creating 
  modern, scalable, and user-focused web applications.
</p>


      </motion.p>

     

      
      {/* Main CTAs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Link
          to="/projects"
          className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
        >
          <span className="relative z-10">View Projects</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >
          <span className="relative z-10">Contact Me</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Link>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
  className="mt-12 w-full max-w-5xl z-10"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  {/* Section Title */}
  <motion.h3
    className="text-center text-gray-700 dark:text-gray-300 text-base font-semibold uppercase tracking-wider mb-8"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Tech Stack &amp; Expertise
  </motion.h3>

  {/* Icon Grid */}
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 px-4">
    {techStack.map((tech, index) => (
      <motion.div
        key={tech.name}
        className="group flex flex-col items-center gap-2"
        custom={index}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        {/* Icon Wrapper */}
        <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-md 
                        group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
          <img
            src={tech.icon}
            alt={`${tech.name} logo`}
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br 
                          from-blue-500/0 to-purple-500/0 
                          group-hover:from-blue-500/10 group-hover:to-purple-500/10 
                          transition-colors duration-300" />
        </div>

        {/* Label */}
        <span className="text-sm text-gray-700 dark:text-gray-400 
                         group-hover:text-blue-500 dark:group-hover:text-blue-400 
                         transition-colors">
          {tech.name}
        </span>
      </motion.div>
    ))}
  </div>
</motion.div>

    </section>
  );
}
