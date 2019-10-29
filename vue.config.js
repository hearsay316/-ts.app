/*
 * @张
 * @time 2019-10-29
 *
 */
const path = require("path");
const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");
const prerenderSpaPlugin = require("prerender-spa-plugin");
// BundleAnalyzerPlugin 打包分析代码大小
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改的
    } else {
      // 为开发环境修改的
    }
    return {
      /**
       * externals模块提供webpack打包的cdn 写发
       * @module externals
       * 有顺序 : 非vue系组件一定要在vue 之前 ,vue系一定要vue之后.
       *
       */
      externals: {
        axios: "axios",
        rxjs: "rxjs",
        vue: "Vue",
        "vue-rx": "VueRx",
        vuex: "Vuex",
        "vue-router": "VueRouter",
        swiper: "Swiper"
      },
      plugins: [
        /**
         * @SkeletonWebpackPlugin 骨架屏
         */
        new SkeletonWebpackPlugin({
          webpackConfig: {
            entry: {
              app: path.resolve("./src/config/entry.js")
            }
          }
        }),
        /**
         * @prerenderSpaPlugin  首屏渲染
         */
        new prerenderSpaPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/", "/about"]
        }) //,
        //  new BundleAnalyzerPlugin()
      ],
      /**
       * @alias别名
       * 提供在vue打包用的绝对路径(必须上)
       * 需要引用path模块
       */

      resolve: {
        alias: {
          "@config": path.resolve(__dirname, "./src/config"),
          "@css": path.resolve(__dirname, "./src/assets/css"),
          "@view": path.resolve(__dirname, "./src/view"),
          "@img": path.resolve(__dirname, "./src/assets/img"),
          "@com": path.resolve(__dirname, "./src/components"),
          "@ajax": path.resolve(__dirname, "./src/config/ajax")
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
