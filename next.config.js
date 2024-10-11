const withImages = require('next-images')
const withFonts = require('next-fonts')
const withPlugins = require('next-compose-plugins');
const TerserPlugin = require("terser-webpack-plugin");

withImages({
  webpack(config) {
    return config;
  },
});

withFonts({
  webpack(config, options) {
    console.log(options)
    return config;
  }
});

module.exports = withPlugins([withFonts, withImages, {
  env: {
    // REACT_API_URL: process.env.REACT_API_URL,
  },
  eslint: {
    dirs: ['pages', 'utils', 'redux', 'styles', 'helpers', 'assets'], 
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.uglifyJsMinify,
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      },),
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: true,
      },
    ]
  },
}]);
