import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#6725F4',
          dark: '#5419D1',
          light: '#8249F6',
        },
        secondary: {
          DEFAULT: '#7E7E7E',
          dark: '#1C1C1C',
          light: '#F8F8F8',
        },
        accent: {
          DEFAULT: '#F9F6FF',
          dark: '#F7F9FF',
          light: '#FFFFFF',
        },
        wealthy: {
          purple: '#6725F4',
          darkText: '#1C1C1C',
          lightBg: '#F8F8F8',
          secondaryText: '#7E7E7E',
          cardBg: '#F7F9FF',
        },
      },
      fontFamily: {
        'display': ['"DM Serif Display"', 'serif'],
        'sans': ['Lato', 'sans-serif'],
        'body': ['Maven Pro', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
