import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaEye, FaDownload } from "react-icons/fa";

export default function Resume() {
  const ref = useRef(null);

  // Motion values for parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);
  const bgX = useTransform(x, [-50, 50], [-15, 15]);
  const bgY = useTransform(y, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX / 10);
    y.set(offsetY / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]" />

        {/* Enhanced animated gradient waves */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)] blur-3xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 [mask-image:radial-gradient(circle_at_60%_50%,white,transparent_70%)] blur-3xl"
            animate={{
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 7.5,
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
              animate={{
                y: ["0vh", "100vh"],
                x: `calc(${Math.random() * 100}vw)`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-8">
        <motion.div
          className="max-w-5xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Content Container */}
          <div className="relative p-8 rounded-2xl overflow-hidden">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md" />

            {/* Gradient Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-30" />

            {/* Content Grid */}
            <div className="relative grid md:grid-cols-2 gap-12">
              {/* Left: Text & Buttons */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <motion.span
                  className="inline-block px-4 py-1.5 text-sm uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Professional Journey
                </motion.span>

                <motion.h1
                  className="text-4xl md:text-5xl font-black tracking-tight mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 text-transparent bg-clip-text">
                    My Resume
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Explore my skills, projects, and achievements. View Resume
                  online or Download PDF for the full details.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <a
                    href="/Resume/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 font-medium text-gray-900 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%)] bg-[length:250%_100%] animate-shine" />
                    <span className="flex items-center gap-2">
                      <FaEye className="text-blue-500" />
                      View Resume
                    </span>
                  </a>

                  <a
                    href="/Resume/Resume.pdf"
                    download
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl"
                  >
                    {/* Button gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-[1.02]" />
                    {/* Button shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%)] bg-[length:250%_100%] animate-shine" />
                    <span className="relative flex items-center gap-2 px-6 py-3 font-medium text-white">
                      <FaDownload />
                      Download Resume
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* Right: Experience Cards */}
              <div className="space-y-6">
                {/* Skills Card */}
                <motion.div
                  className="group relative p-6 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                  <div className="absolute inset-[1px] bg-white/10 dark:bg-gray-800/10 rounded-xl z-0" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                      Skills & Expertise
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["React", "Node.js", "Express.js", "MongoDB"].map(
                        (skill, i) => (
                          <motion.div
                            key={skill}
                            className="px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            {skill}
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className="group relative p-6 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300" />
                  <div className="absolute inset-[1px] bg-white/10 dark:bg-gray-800/10 rounded-xl z-0" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                      Experience Highlights
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-500 dark:text-purple-400">
                          10+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Projects Completed
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-500 dark:text-pink-400">
                          4+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Certifications Earned
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
