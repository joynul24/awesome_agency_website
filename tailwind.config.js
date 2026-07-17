/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#f83b3b',
          600: '#e51d1d',
          700: '#c11414',
          800: '#a01414',
          900: '#841818',
          950: '#480707',
        },
        navy: {
          50: '#f0f4ff',
          100: '#dde6ff',
          200: '#c2d2ff',
          300: '#9ab3ff',
          400: '#7088ff',
          500: '#4a5df0',
          600: '#3840e5',
          700: '#2f33ca',
          800: '#292ca3',
          900: '#1a2040',
          950: '#0d1128',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        consulting: {
          primary: '#e51d1d',
          'primary-content': '#ffffff',
          secondary: '#1a2040',
          'secondary-content': '#ffffff',
          accent: '#f83b3b',
          neutral: '#374151',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#f3f4f6',
          info: '#3b82f6',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
    ],
    darkTheme: false,
  },
};
