/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      boxShadow: {
        rainbow:
          '0 0 0 10px #ff0000,0 0 0 20px #ff7700,0 0 0 30px #FFDD00,0 0 0 40px #00FF00,0 0 0 50px #0000FF,0 0 0 60px #C77DF3,0 0 0 70px #8A2BE2',
      },

      colors: {
        vtwhite: {
          DEFAULT: '#ffffff',
          light: '#f8f8f8',
          dark: '#f2f2f2',
        },

        vtindigo: {
          DEFAULT: '#2c3e50',
        },

        vtdivider: {
          light: 'rgba(84, 84, 84, 0.65)',
          dark: 'rgba(84, 84, 84, 0.48)',
        },

        vttext: {
          DEFAULT: 'rgba(60, 60, 60, 0.66)',
          light: 'rgba(60, 60, 60, 0.66)',
          dark: 'rgba(235, 235, 235, 0.64)',
        },

        vtheading: {
          DEFAULT: '#2c3e50',
          dark: '#ffffff',
          light: '#2c3e50',
        },

        vtblack: {
          DEFAULT: '#181818',
          light: '#222222',
          dark: '#282828',
        },

        gold: {
          light: '#ddbf5f',
          DEFAULT: '#d4af37',
          dark: '#aa8c2c',
        },
      },

      fontFamily: {
        body: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },

      gap: {
        vt: '160px',
      },
    },
  },

  plugins: [],
};
