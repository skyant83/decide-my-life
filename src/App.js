import React, { useState, useEffect } from 'react';

// Navbar Component with Dark Mode Toggles
function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-10 transition-colors duration-300">
      <h1 className="text-2xl font-bold tracking-tight">🎲 Decide My Life Demo</h1>
      <div className="flex items-center gap-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Spin the Wheel
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Flip a Coin
            </a>
          </li>
        </ul>
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="text-xl focus:outline-none transition-all"
          title="Toggle Dark Mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

// Main Content Component
function MainContent() {
  const [textareaValue, setTextareaValue] = useState('');
  const items = textareaValue
    .split('\n')

  return (
    <main className="max-w-3xl mx-auto mt-12 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-shadow hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Decide My Life Demo Site</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          You can type one item per line. Remove or edit directly.
        </p>

        <textarea
          rows={6}
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder="Type one item per line..."
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white resize-none"
        />

        <h3 className="mt-6 mb-2 font-semibold text-lg">Your Items:</h3>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="text-center p-6 mt-16 text-gray-400 text-sm border-t dark:border-gray-700">
      &copy; 2025 React Demo Site. Good Luck L2Dev Group 4 ✨
    </footer>
  );
}

// App Component - combines everything into a full website
function App() {
  // Initialize darkMode state from localStorage
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 font-sans">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
