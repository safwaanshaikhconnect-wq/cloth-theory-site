import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-gold': '#C17F4A',
        'dark-primary': '#EDE8DC',
        'dark-secondary': '#7A6A55',
        'luxury-bg': '#FDF8F2',
        'luxury-text': '#2C2416',
        'warm-beige': '#F5F0E8',
        'warm-light': '#EDE8DC',
        'warm-accent': '#C17F4A',
        'text-dark': '#2C2416',
        'text-muted': '#7A6A55',
        'border-light': '#D9CEBF',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'morph': 'morph 6s ease-in-out infinite',
        'liquid-flow': 'liquidFlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' },
          '50%': { borderRadius: '70% 30% 46% 54% / 30% 30% 70% 70%' },
        },
        liquidFlow: {
          '0%, 100%': { filter: 'blur(0px)' },
          '50%': { filter: 'blur(2px)' },
        },
      },
      backdropFilter: {
        'glass': 'blur(16px)',
      },
    },
  },
  plugins: [],
};

export default config;
