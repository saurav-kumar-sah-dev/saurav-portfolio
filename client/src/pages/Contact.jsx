import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000" />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="w-full space-y-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Header Section */}
              <div className="space-y-6">
                <motion.span
                  className="inline-block text-sm uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get in Touch
                </motion.span>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    Let's Create
                    <br />
                    Something Amazing
                    <br />
                    Together
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Have a project in mind? I'm always open to discussing new opportunities
                  and ideas. Let's bring your vision to life.
                </motion.p>
              </div>

              {/* Contact Cards */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Email Card */}
                <div className="group p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Email</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">sauravshubham903@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 dark:bg-purple-400/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Location</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">CUTM Pkd,Odisha</p>
                    </div>
                  </div>
                </div>

               
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
