/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['var(--font-roboto-slab)', 'Roboto Slab', 'serif']
      }
    }
  },
  plugins: []
};
