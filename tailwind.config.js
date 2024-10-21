/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        cream: 'rgba(255, 237, 179, 0.6)',
        twitter: '#1DA1F2',
      },
    },
  },
  plugins: [],
};
