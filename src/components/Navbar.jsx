function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-10 transition-colors duration-300">
      <h1 className="text-2xl font-bold tracking-tight">🎲 Decide My Life 🎲</h1>
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

export default Navbar;