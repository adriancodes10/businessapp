const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
  ],
  theme: {
    screens: {
      md: '700px',
      // => @media (min-width: 640px) { ... }

      lg: '1100px',
      // => @media (min-width: 768px) { ... }

      xl: '1400px',
      // => @media (min-width: 1024px) { ... }

      // 'xl': '1800px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '2200px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(5px)' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' },
        },
        bounce1: {
          '0%, 100%': { transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(10%)' },
        },
      },
      animation: {
        bounce1: 'bounce 3s cubic-bezier(0.8, 0, 1, 1) infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        floatX: 'floatX 4s ease-in-out infinite'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.bubble': {
          /* display: none; */
          zIndex: '1',
          textAlign: 'center',
          position: 'absolute',
          height: '6em',
          width: '6em',
          borderRadius: '50%',
          // left: '0',
          /* transform: translateX(); */
          // top: '-45%',
          display: 'flex',
          /* place items in column */
          flexDirection: 'column',
          /* center flex items horizontally */
          alignItems: 'center',
          /* center all content vertically */
          justifyContent: 'center',
          bottom: '25%',
          left: '10%',
        },
        '.second': {
          bottom: '3%',
          left: '10%',
        },
        '.third': {
          bottom: '25%',
          left: 'unset',
          right: '10%',
        },
        '.fourth': {
          bottom: '3%',
          left: 'unset',
          right: '10%',
        },
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
        

      });
    }),
  ],
};
