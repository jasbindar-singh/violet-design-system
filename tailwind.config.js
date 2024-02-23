/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        '3xl': ['48px', '150%'],
        '2xl': ['40px', '150%'],
        xl: ['32px', '150%'],
        lg: ['24px', '150%'],
        md: ['16px', '150%'],
        sm: ['12px', '150%'],
        xs: ['10px', '150%'],
      },
      colors: {
        solid: {
          violet: { 100: '#AE60EB', 200: '#9D3FE7', 300: '#6A17AB' },
          red: '#D51A52',
          yellow: '#FF9500',
          green: '#008998',
          blue: '#0F0BAB',
          'dark-blue': '0F0BAB',
          black: '#1A141F',
          white: '#FFFFFF',
        },
        grey: {
          600: '#4B3A5A',
          500: '#ABA7AF',
          400: '#D4D2D5',
          300: '#D9D1E0',
          200: '#E5E0EB',
          100: '#F5F3F7',
        },
      },
      spacing: {
        4: '4px',
        8: '8px',
        12: '12px',
        28: '28px',
        52: '52px',
      },
      borderRadius: {
        4: '4px',
        8: '8px',
        12: '12px',
        24: '24px',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
