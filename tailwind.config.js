/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#4f55c4',
        darkPurple: '#4045b3',
        dark: '#303030',
        lightGray: '#f2f4f7',
      },
    },
  },
  plugins: [],
};
