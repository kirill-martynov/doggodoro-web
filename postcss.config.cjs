const config = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./src/assets/css/media.css'],
    },
    'postcss-nested': {},
    'postcss-custom-media': {},
  },
};

module.exports = config;
