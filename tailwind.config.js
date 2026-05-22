/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#04040a',
          800: '#08080f',
          700: '#0d0d18',
          600: '#111120',
          500: '#16162a',
          400: '#1e1e35',
          300: '#252540',
        },
        brand: {
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          'blue-dark': '#1d4ed8',
          cyan: '#06b6d4',
          'cyan-light': '#22d3ee',
          emerald: '#10b981',
          'emerald-light': '#34d399',
          purple: '#8b5cf6',
          'purple-light': '#a78bfa',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.06) 0%, transparent 50%)',
      },
      boxShadow: {
        glass: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-hover': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        'blue-glow': '0 0 24px rgba(59,130,246,0.3)',
        'emerald-glow': '0 0 24px rgba(16,185,129,0.3)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(59,130,246,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(59,130,246,0.6)' },
        },
      },
    },
  },
  plugins: [],
};
