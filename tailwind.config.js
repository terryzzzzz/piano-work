
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundSize: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
      },
      borderRadius: {
        'xs': '.05rem',
      },
      maxHeight: {
        'none': '0',
        '64': '16em',
        '400': '400px',
        '500': '500px',
        '600': '600px',
      },
      minHeight: {
        '64': '16em',
      },
      width: {
        '1/8': '12.5%',
      },
      height: {
        '1/3': '33.33%',
        '1/20': '5%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        'quarter-screen': '25vh',
        'half-screen': '50vh',
        '1/10-screen': '10vh',
        '2/10-screen': '20vh',
        '3/10-screen': '30vh',
        '4/10-screen': '40vh',
        '5/10-screen': '50vh',
        '6/10-screen': '60vh',
        '7/10-screen': '70vh',
        '8/10-screen': '80vh',
        '9/10-screen': '90vh',
      },
      textColor: {
        'gray-primary': '#1f1f1f',
        'gray-secondary': '#989898',
        'yellow-primary': '#ffd700',
      },
      backgroundColor: {
        'gray-primary': '#1f1f1f',
        'yellow-primary': '#ffd700',
      },
      borderColor: {
        'gray-primary': '#1f1f1f',
        'yellow-primary': '#ffd700',
      },
      colors: {
        red: {
          '100': '#FFF5F5',
          '200': '#FED7D7',
          '300': '#FEB2B2',
          '400': '#FC8181',
          '500': '#F56565',
          '600': '#bf0e29',
          '700': '#C53030',
          '800': '#9B2C2C',
          '900': '#742A2A',
        }
      },
      opacity: {
        '40': '.4',
      }
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
      'full': '100%',
    },
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  variants: {
    display: ['responsive', 'group-hover'],
    height: ['responsive', 'hover', 'group-hover', 'focus'],
    maxHeight: ['responsive', 'group-hover', 'hover'],
    opacity: ['responsive', 'group-hover', 'hover'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    margin: ['responsive', 'first'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    margin: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('first-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-child${separator}${className}`)}:first-child`
        })
      })
    },
    function({ addVariant, e }) {
      addVariant('last-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last-child${separator}${className}`)}:last-child`
        })
      })
    }
  ],
}
