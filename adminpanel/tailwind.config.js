/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors:{
      'primary': '#1F2A3E',
      'second': '#DDA06B',
      'second-2': '#FFF2DE',
      'btn-orange': '#DE4700',
    }
  },
  darkMode: false,  
  plugins: [],
};
