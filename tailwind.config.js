module.exports = {
  darkMode: 'class', // Enables dark mode via class
  content: ['./index.html', './src/**/*.{ts,tsx}'], // Scan for Tailwind classes
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#646cff',
        'primary-hover': '#535bf2',
        dark: '#242424',
        light: '#ffffff',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
