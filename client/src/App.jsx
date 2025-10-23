import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Wrapper for page transition animations
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-[calc(100vh-200px)]" // ensures consistent height
    >
      {children}
    </motion.div>
  );
}

// ✅ AnimatedRoutes handles page transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Ensure AnimatePresence sees one child per route change */}
      <motion.div key={location.pathname} className="flex-grow">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <PageWrapper>
                <ProjectDetails />
              </PageWrapper>
            }
          />
          <Route
            path="/resume"
            element={
              <PageWrapper>
                <Resume />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          {/* ✅ Catch-all route: Redirect any invalid URLs to home */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  // ✅ Dark mode persisted in localStorage
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow pt-16 sm:pt-20">
          <AnimatedRoutes />
        </main>
        <ScrollToTop darkMode={darkMode} />
        <Footer />
      </div>
    </Router>
  );
}
