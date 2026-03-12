import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gekko Theme - Midnight Blue & Electric Green
        midnight: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c2d5ff',
          300: '#93b5ff',
          400: '#5b8cff',
          500: '#3366ff',
          600: '#1f51ff',
          700: '#0a3cff',
          800: '#0028cc',
          900: '#001999',
        },
        electric: {
          50: '#f0ffee',
          100: '#d4ffcf',
          200: '#a8ffa1',
          300: '#7eff7a',
          400: '#52ff50',
          500: '#2eff2e',
          600: '#00ff00',
          700: '#00dd00',
          800: '#00aa00',
          900: '#007700',
        },
        secondary: {
          50: '#fef6e8',
          100: '#fcecc4',
          200: '#f9dda1',
          300: '#f5c86a',
          400: '#f0b646',
          500: '#d89a2a',
          600: '#a86b29',
          700: '#87542b',
          800: '#704729',
          900: '#5a3a1a',
        },
        accent: {
          50: '#fffbf0',
          100: '#fef6e8',
          200: '#fcecc4',
          300: '#f9dda1',
          400: '#f5c86a',
          500: '#f0b646',
          600: '#d89a2a',
          700: '#a86b29',
          800: '#87542b',
          900: '#704729',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '25px',
        xl: '40px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(46, 255, 46, 0.5)',
        'glow-lg': '0 0 40px rgba(46, 255, 46, 0.6)',
        neon: '0 0 10px rgba(95, 140, 255, 0.4), 0 0 20px rgba(46, 255, 46, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
