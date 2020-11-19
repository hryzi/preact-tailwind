module.exports = {
    theme: {
      extend: {
        colors: {
          green: '#59981A',
          'green-yellow': '#ECF87F',
          'green-lime': '#81B622',
          'green-olive': '#3D550C'
        }
      }
    },
    purge: {
    //   enabled: process.env.NODE_ENV === 'production',
      enabled: false,
      mode: 'all',
      content: [
        './src/components/**/*.js',
        './src/routes/**/*.js',
        './template.html'
      ]
    },
    variants: {},
    plugins: []
  }