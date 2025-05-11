import { useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="logo-switches">
      <button
        id="theme-toggle"
        accessKey="t"
        title="(Alt + T)"
        onClick={toggleTheme}
        className="p-2 rounded-full"
      >
        <motion.svg
          id="moon"
          width="24"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: darkMode ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </motion.svg>
        <motion.svg
          id="sun"
          width="24"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: darkMode ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </motion.svg>
      </button>
    </div>
  );
};

export default ThemeToggle;