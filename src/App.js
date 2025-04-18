import React from 'react';
import useDarkMode from './hooks/useDarkMode.js';
import Navbar from './components/Navbar.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen transition-colors duration-300 font-sans">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;