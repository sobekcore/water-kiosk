const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      'brand-900': '#3c4d57',
      'brand-300': '#27a9e1',
      'brand-200': '#7ecdf0',
      'brand-100': '#c8e8f4',
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
      'lemon-primary': '#9e9d58',
      'lemon-secondary': '#d3d27c',
      'lemon-complementary': '#a9b556',
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
