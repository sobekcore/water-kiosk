const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: '#27a9e1',
      secondary: '#3c4d57',
      white: '#ffffff',
      gray: '#d3d3d3',
      green: '#95ca66',
      orange: '#ffad33',
      red: '#ff5550',
      'cucumber-primary': '#4e763b',
      'cucumber-secondary': '#bfebb1',
      'mint-primary': '#297337',
      'mint-secondary': '#b3ddbf',
      'coconut-primary': '#43220f',
      'coconut-secondary': '#f3efe5',
      'water-primary': '#315666',
      'water-secondary': '#bde5f6',
    },
    extend: {
      screens: {
        xs: '350px',
      },
      minHeight: {
        'dynamic-screen': '100dvh',
      },
      dropShadow: {
        't-2xl': '25px 0 25px rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [
    plugin(function (plugin) {
      plugin.addVariant('hocus', ['&:hover', '&:focus-visible']);
    }),
  ],
};
