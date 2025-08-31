/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif'],
      },
      colors: { brand: { DEFAULT: '#8b5cf6', dark: '#ec4899' },
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(2,8,23,.15)',
      }
    },
  },
  plugins: [],
}
