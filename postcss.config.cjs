module.exports = {
  plugins: {
    'postcss-import': {
      path: ['./src/**/*.*'],
    },
    autoprefixer: {},
    '@tailwindcss/jit': {},
    'postcss-preset-env': {
      autoprefixer: {},
      features: {
        'nesting-rules': true
      }
    }
  }
}

