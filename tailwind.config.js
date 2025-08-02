/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#afb5bd',
          300: '#899ab0',
          500: '#748cab',
          700: '#6a809b',
          900: '#5f6873',
        },
        secondary: {
          100: '#ffffff',
          300: '#fafbfa',
          500: '#eef0eb',
          700: '#e1e4de',
          900: '#c7c7c7',
        },
        tertiary: {
          100: '#4e7189',
          300: '#335871',
          500: '#284b63',
          700: '#233d4e',
          900: '#172128',
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