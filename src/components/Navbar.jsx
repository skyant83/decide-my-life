import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-10 transition-colors duration-300">
      <Link to="/" className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
        🎲 Decide My Life 🎲
      </Link>
      <div className="flex items-center gap-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/spin-the-wheel"
              className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Spin the Wheel
            </Link>
          </li>
          <li>
            <Link
              to="/flip-a-coin"
              className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Flip a Coin
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="text-xl text-gray-800 dark:text-gray-100 focus:outline-none transition-all"
          title="Toggle Dark Mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;