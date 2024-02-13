/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  theme: {
    extend: {
      fontfamily: {
        'neue': ['Neue Haas Grotesk', 'sans-serif'],
      },
      colors: {
        'lt-black': '#181818',
        'lt-white': '#fbf8e7',
        'lt-orange': '#b16540',
        'lt-blue': '#81beac',
        'lt-yellow': '#eda435',
        'lt-red': '#942724',
      }
    },
  },
  plugins: [],
}

