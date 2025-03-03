/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in',
          'bounce': 'bounce 1s infinite'
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          }
        }
      },
    },
    plugins: [],
  }
  module.exports = {
    // ...
    theme: {
      extend: {
        animation: {
          pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      }
    }
  }