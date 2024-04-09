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
          50: '#fdfae9',
          100: '#fbf2c6',
          200: '#f7e491',
          300: '#f3ce51',
          400: '#eebb2f',
          500: '#dd9f15',
          600: '#bf7a0f',
          700: '#985710',
          800: '#7e4615',
          900: '#6c3917',
          950: '#3f1c09',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
