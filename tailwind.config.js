/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        surface: {
          white: '#ffffff',
          light: '#fbfbfe',
          subtle: '#f5f4fb',
          card: 'rgba(255, 255, 255, 0.72)',
          cardHover: 'rgba(255, 255, 255, 0.90)',
          border: 'rgba(216, 180, 254, 0.35)',
          borderStrong: 'rgba(168, 85, 247, 0.45)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(112, 144, 176, 0.12)',
        'glass-hover': '0 14px 40px 0 rgba(147, 51, 234, 0.16)',
        'soft-glow': '0 0 25px -5px rgba(168, 85, 247, 0.25)',
        'card-glow': '0 10px 30px -10px rgba(139, 92, 246, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
