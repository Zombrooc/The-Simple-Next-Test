// module.exports = {
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });

//     return config;
//   }
// };


const withImages = require('next-images');
module.exports = withImages({
  esModule: true
});