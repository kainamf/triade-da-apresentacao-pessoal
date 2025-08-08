/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#a6b2bd',
          300: '#7f99b2',
          500: '#698dae',
          700: '#5f809e',
          900: '#566674',
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