module.exports = {
  parser: 'sugarss',
  plugins: {
    precss: {},
    'postcss-svg': {
      paths: ['./app/frontend/images/icons'],
      ei: false,
      svgo: true
    },
    'postcss-size': {}
    // 'postcss-import': {},
    // 'postcss-cssnext': {},
    // 'autoprefixer': {},
    // 'cssnano': {}
  }
}
