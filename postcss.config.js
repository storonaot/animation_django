module.exports = {
  parser: 'sugarss',
  plugins: {
    'precss': {},
    'postcss-svg': {
      paths: ['./app/frontend/images/icons']
    }
    // 'postcss-import': {},
    // 'postcss-cssnext': {},
    // 'autoprefixer': {},
    // 'cssnano': {}
  }
}
