module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
      container: {
    center: true,
          padding: '1rem',
      },
      backgroundColor: theme => ({
          ...theme('colors'),
          'apblack': '#0a0a0a',
          'apwhite': '#fefefe',
          'apgray': '#cecece',
          'apdgray': '#191a1d',
          'appurple': '#9C688E',
          'aporange': '#f97c0d',
          'apgreen': '#008000'
      }),
      textColor: font => ({
          ...font('colors'),
          'apblack': '#0a0a0a',
          'apwhite': '#fefefe',
          'apgray': '#cecece',
          'apdgray': '#191a1d',
          'appurple': '#9C688E',
          'aporange': '#f97c0d',
          'apgreen': '#008000'
      }),
      borderColor: border => ({
          ...border('colors'),
          'apblack': '#0a0a0a',
          'apwhite': '#fefefe',
          'apgray': '#cecece',
          'apdgray': '#191a1d',
          'appurple': '#9C688E',
          'aporange': '#f97c0d',
          'apgreen': '#008000'
      }),
      extend: {
    zIndex: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
    },
    transitionProperty: {
      'width': 'width'
    }
  },
  },
corePlugins: {
   maxHeight: true,
},
  variants: {
      extend: {
          backgroundColor: [
              'even',
              'odd'
          ],
          backgroundOpacity: [
              'even',
              'odd'
          ],
          borderColor: [
              'hover',
              'focus',
              'active'
          ]
      }
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
