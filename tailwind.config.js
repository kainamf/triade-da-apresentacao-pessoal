/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffffff',
          300: '#f1e4d6',
          500: '#ebd2b8',
          700: '#dfc0a1',
          900: '#bf9d79',
        },
        secondary: {
          100: '#4e507e',
          300: '#2a2c5b',
          500: '#1b1d46',
          700: '#13142a',
          900: '#000000',
        },
        tertiary: {
          100: '#ffffff',
          300: '#ffffff',
          500: '#f5f5f5',
          700: '#e3e3e3',
          900: '#bfbfbf',
        },
        neutral: {
          100: '#adadad',
          300: '#898989',
          500: '#545454',
          700: '#393939',
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