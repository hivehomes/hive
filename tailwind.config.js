/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        saffron: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fbd24e',
          400: '#fabe25',
          500: '#f49d0c',
          600: '#d87607',
          700: '#bc560a',
          800: '#923f0e',
          900: '#78340f',
          950: '#451a03',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
