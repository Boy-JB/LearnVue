// module.exports = {
//   configurewebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views',
//       }
//     }
//   }
// }

const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@$", path.join(__dirname, "src"))
      .set("components", path.join(__dirname, "src/components"))
      .set("assets", path.join(__dirname, "src/assets"))
      .set("network", path.join(__dirname, "src/network"))
      .set("common", path.join(__dirname, "src/common"))
      .set("views", path.join(__dirname, "src/views"));
  },
};
