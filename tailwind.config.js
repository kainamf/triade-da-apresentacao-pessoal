/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#98c5ca',
          300: '#6cbbc3',
          500: '#54b7c1',
          700: '#49a9b2',
          900: '#447e84',
        },
        secondary: {
          100: '#f5e8ed',
          300: '#eac0d0',
          500: '#e6aac1',
          700: '#dd9ab3',
          900: '#c77d99',
        },
        tertiary: {
          100: '#f1e3b0',
          300: '#f0d87d',
          500: '#f2d462',
          700: '#ebcb4f',
          900: '#dab62e',
        },
        neutral: {
          100: '#898989',
          300: '#707070',
          500: '#494949',
          700: '#363636',
          900: '#303030',
        },
        font: {
          DEFAULT: '#303030',
        },
        background: '#fafafa',
      },
    },
  },
  plugins: [],
};