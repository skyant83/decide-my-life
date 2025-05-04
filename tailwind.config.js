/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,            // DaisyUI uses data-theme, not Tailwind’s dark class
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'garden',
      'business',
      'nord',
      // add extras here if you like, or define a custom theme
    ],
  },
};
