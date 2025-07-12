/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-900': '#0f172a',
        'slate-800': '#1e293b',
        'slate-700': '#334155',
        'slate-600': '#475569',
        'slate-500': '#64748b',
        'slate-400': '#94a3b8',
        'slate-300': '#cbd5e1',
        'slate-200': '#e2e8f0',
        'blue-400': '#60a5fa',
        'purple-500': '#a855f7',
        'amber-500': '#f59e0b',
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'blink': 'blink 1s infinite',
        'bounce-custom': 'bounce-custom 2s infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        'bounce-custom': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '40%': { transform: 'translateX(-50%) translateY(-10px)' },
          '60%': { transform: 'translateX(-50%) translateY(-5px)' }
        }
      },
      gridTemplateColumns: {
        '2fr-1fr': '2fr 1fr',
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      borderRadius: {
        '20': '20px',
      },
      perspective: {
        '1000': '1000px',
      },
      backdropBlur: {
        'lg': '16px',
        'sm': '4px',
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'custom-hover': '0 30px 60px rgba(0,0,0,0.4)',
        'blue-glow': '0 10px 25px rgba(96,165,250,0.4)',
        'blue-glow-sm': '0 10px 25px rgba(96,165,250,0.2)',
        'blue-glow-lg': '0 20px 40px rgba(96,165,250,0.2)',
      }
    },
  },
  plugins: [],
}
