import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative
        bg-white/90 dark:bg-gray-900/90
        text-gray-800 dark:text-gray-100
        backdrop-blur-md
        py-8 mt-16
        border-t border-gray-200 dark:border-gray-700
      "
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left section */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left"
        >
          © {year}{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-200">
            Saurav Kumar Sah
          </span>{" "}
          — All rights reserved.
        </motion.p>

        {/* Right section */}
        <div className="flex gap-6 text-2xl flex-wrap justify-center md:justify-end">
          {/* GitHub */}
          <motion.a
            href="https://github.com/saurav-kumar-sah-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.15, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="relative group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-500 rounded-full"
          >
            <span className="absolute -inset-3 rounded-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 dark:from-gray-500 dark:via-gray-400 dark:to-gray-500 opacity-10 blur-xl group-hover:opacity-20 transition"></span>
            <FaGithub className="relative text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/sauravkumarsah-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.15, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="relative group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 rounded-full"
          >
            <span className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-10 blur-xl group-hover:opacity-20 transition"></span>
            <FaLinkedin className="relative text-blue-500 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:sauravshubham903@gmail.com"
            aria-label="Email"
            whileHover={{ scale: 1.15, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="relative group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 rounded-full"
          >
            <span className="absolute -inset-3 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-400 opacity-10 blur-xl group-hover:opacity-20 transition"></span>
            <FaEnvelope className="relative text-red-500 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300" />
          </motion.a>
        </div>
      </div>

      {/* subtle bottom line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"></div>
    </motion.footer>
  );
}
