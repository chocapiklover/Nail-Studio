/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top right, #eeaeca, #94bbe9)',
        'gradient-radial2': 'radial-gradient(circle at bottom left, #eeaeca, #94bbe9)',
      },

      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',

      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        pulseGlow: {
          '0%': {
            boxShadow: '0 0 10px rgba(255, 105, 180, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(255, 105, 180, 1)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(255, 105, 180, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],
}

