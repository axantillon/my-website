module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    fontFamily: {
      'body': ['PT\ Sans', 'Open\ Sans', 'Roboto', 'Lato']
    },

    linearBorderGradients: theme => ({
      colors: theme('colors'),
    }),

    extend: {
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
  
        'primary': '#b6e835',
        'secondary': '#8fe85e',
        'attention': '#f06449',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       }
    }
  },

  variants: ['responsive', 'hover', 'focus', 'group-hover', 'disabled', 'active', 'group-hover'],
  
  plugins: [
    require('tailwindcss-border-gradients')(),
  ],
}
