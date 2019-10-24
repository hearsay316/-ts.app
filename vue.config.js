const path = require("path");
const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");
const prerenderSpaPlugin = require("prerender-spa-plugin");
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改的
    } else {
      // 为开发环境修改的
    }

    return {
      // externals: {
      //   rxjs: "rxjs",
      //   vue: "Vue",
      //   "vue-rx": "VueRx",
      //   "@nutui/nutui": "NutUI"
      // },
      plugins: [
        new SkeletonWebpackPlugin({
          webpackConfig: {
            entry: {
              app: path.resolve("./src/config/entry.js")
            }
          }
        }),
        new prerenderSpaPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/", "/about"]
        })
      ],
      resolve: {
        alias: {
          "@config": path.resolve(__dirname, "./src/config"),
          "@css": path.resolve(__dirname, "./src/assets/css"),
          "@view": path.resolve(__dirname, "./src/view"),
          "@img": path.resolve(__dirname, "./src/assets/img"),
          "@com": path.resolve(__dirname, "./src/components")
        }
      }
    };
  }
};
/*{
  webpackConfig: {
    entry: {
      app: path.join((__dirname, "./scr/skeleton.js"))
    },
    router: {
      mode: "history",
          routes: [
        {
          path: "/",
          skeletonId: "skeleton1"
        },
        {
          path: "/about",
          skeletonId: "skeleton2"
        }
      ]
    }
  }
}*/
