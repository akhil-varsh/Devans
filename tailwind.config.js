export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          dark: '#0052CC',
        },
        secondary: {
          DEFAULT: '#00F5FF',
          dark: '#00D1D9',
        },
        accent: {
          DEFAULT: '#FF00FF',
          dark: '#CC00CC',
        },
        neutral: {
          DEFAULT: '#E6E6E6',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}