/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/background.jpg')",
        'christmas-bg': "url('/background-christmas.jpg')"
      }
    }
  },
  plugins: []
};
