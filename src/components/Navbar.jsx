import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';


function Navbar() {
	const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'nord')

  useEffect(() => {
    // initialize theme-change (false = don’t sync with system pref)
    themeChange(false);
		const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme);
			console.log(currentTheme);

    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // return () => observer.disconnect()
  }, []);

	const handleThemeSet = (newTheme) => {
		document.documentElement.setAttribute('data-theme', newTheme)
		localStorage.setItem('theme', newTheme)
		setTheme(newTheme)
	}

  return (
    <div className="navbar bg-neutral shadow-md sticky top-0 z-10">
      <div className="flex-1">
        <Link to="/"
					className="normal-case text-xl text-neutral-content"
					style={{ textDecoration: 'none' }}>
          🎲 Decide My Life 🎲
        </Link>
      </div>
      <div className="flex-none flex items-center space-x-2">
        <ul className="menu menu-horizontal m-auto">
          <li><Link to="/spin-the-wheel"
						className='text-neutral-content'
						style={{ textDecoration: 'none' }}>Spin the Wheel</Link></li>
          <li><Link to="/flip-a-coin"
						className='text-neutral-content'
						style={{ textDecoration: 'none' }}>Flip a Coin</Link></li>
          <li><Link to="/dice-roll"
						className='text-neutral-content'
						style={{ textDecoration: 'none' }}>Roll Dice</Link></li>
        </ul>
        {/* Theme Toggle Buttons */}
				{theme === 'business' && (
					<button className="menu"
						// data-set-theme="nord"
						// data-act-class="ACTIVE"
						title="Light Mode"
						style={{paddingRight:20}}
						// data-key='theme'
						onClick={() => {handleThemeSet('nord')}}
					>
						☀️
					</button>
				)}
				{theme === 'nord' && (
					<button
						className="menu"
						style={{paddingRight:20}}
						// data-set-theme="business"
						// data-act-class="ACTIVE"
						title="Dark Mode"
						// data-key='theme'
						onClick={() => {handleThemeSet('business')}}
						>
						🌙
					</button>
				)}
      </div>
    </div>
  );
}

export default Navbar;
