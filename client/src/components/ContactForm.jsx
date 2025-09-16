import { useState } from 'react';
import { sendMessage } from '../api/api';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      await sendMessage(form);
      setStatus({ loading: false, success: 'Message sent successfully!', error: null });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: null, error: 'Failed to send message. Try again later.' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const inputClasses = `
    w-full px-5 py-4 rounded-xl
    bg-white/50 dark:bg-gray-800/50
    border border-gray-200/50 dark:border-gray-700/50
    backdrop-blur-sm
    text-gray-900 dark:text-white
    placeholder:text-gray-500 dark:placeholder:text-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50
    focus:border-transparent
    transition-all duration-300
    hover:bg-white/70 dark:hover:bg-gray-800/70
    transform focus:scale-[1.02]
  `;

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative Elements */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl" />
      <div className="absolute -z-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-pulse top-0 -right-16" />
      <div className="absolute -z-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse bottom-0 -left-16" />

      <motion.form
        onSubmit={handleSubmit}
        className="relative space-y-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl p-8 md:p-10 rounded-[1.5rem] shadow-2xl"
      >
        {/* Form Fields */}
        <motion.div className="space-y-6" variants={containerVariants}>
          {/* Name Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message here..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className={`${inputClasses} resize-none`}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={status.loading}
              className={`
                w-full py-4 px-6 rounded-xl text-white font-medium
                relative overflow-hidden group
                bg-gradient-to-r from-blue-500 to-purple-500
                transition-all duration-300
                transform hover:scale-[1.02]
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
              `}
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button Content */}
              <span className="relative flex items-center justify-center">
                {status.loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Status Messages */}
        <AnimatePresence>
          {(status.success || status.error) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`
                mt-4 p-4 rounded-xl text-sm flex items-center
                ${status.success
                  ? 'bg-green-100/80 dark:bg-green-800/30 text-green-700 dark:text-green-300'
                  : 'bg-red-100/80 dark:bg-red-800/30 text-red-700 dark:text-red-300'
                }
              `}
            >
              {status.success ? (
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <p>{status.success || status.error}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.div>
  );
}
