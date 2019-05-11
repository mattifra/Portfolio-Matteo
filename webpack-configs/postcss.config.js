module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      features: {
        'custom-properties': true
      }
    },
    'rucksack-css': {
      autoprefixer: true,
      reporter: true
    },
    'cssnano': {
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        }
      ]
    }
  }
};