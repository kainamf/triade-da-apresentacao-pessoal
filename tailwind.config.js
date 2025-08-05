/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dbdbdb',
          300: '#bec2c5',
          500: '#adb5bd',
          700: '#a3a8ad',
          900: '#8f8f8f',
        },
        secondary: {
          100: '#7c8c9c',
          300: '#4b6886',
          500: '#385675',
          700: '#314458',
          900: '#1c2126',
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
          default: '#303030',
        },
        background: '#fafafa',
      },
    },
  },
  plugins: [],
};