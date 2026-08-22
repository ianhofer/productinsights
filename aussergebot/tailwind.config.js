/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        'primary-light': '#7CB342',
        'primary-very-light': '#C8E6C9',
        background: '#FAFAF8',
        surface: '#F0F4E8',
        'text-primary': '#11181C',
        'text-secondary': '#687076',
        'text-muted': '#9BA1A6',
        border: '#E6ECE0',
        error: '#E53935',
      },
    },
  },
  plugins: [],
};
