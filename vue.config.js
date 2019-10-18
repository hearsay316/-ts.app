const path = require("path");
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改的
    } else {
      // 为开发环境修改的
      return {
        resolve: {
          alias: {
            "@config": path.resolve(__dirname, "./src/config"),
            "@css": path.resolve(__dirname, "./src/assets/css"),
            "@view": path.resolve(__dirname, "./src/view"),
            "@img": path.resolve(__dirname, "./src/assets/img"),
            "@components": path.resolve(__dirname, "./src/components")
          }
        }
      };
    }
  }
};
