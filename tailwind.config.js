/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f9f9fa',
          100: '#f2f2f5',
          200: '#e5e5eb',
          300: '#d8d8e0',
          400: '#a8a8c0',
          500: '#7878a0',
          600: '#48485d',
          700: '#2d2d3d',
          800: '#1a1a2e',
          900: '#0f0f1e',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
        'gradient-cyber': 'linear-gradient(90deg, #ec4899 0%, #a78bfa 25%, #06b6d4 50%, #3b82f6 75%, #ec4899 100%)',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
        'neon-glow': '0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)',
      },
      animation: {
        'gradient-move': 'gradient-move 8s ease infinite',
        'slow-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}