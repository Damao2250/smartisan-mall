const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463
   */
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 多入口配置
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html',
  //   }
  // },
  //打包app时放开该配置
  //publicPath:'./',
  configureWebpack: config => {
    //生产环境取消 console.log
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))

    //生产环境，开启js\css压缩
    if (process.env.NODE_ENV === 'production') {
        config.plugin('compressionPlugin').use(new CompressionPlugin({
          test: /\.(js|css|less)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        }))
    }

    // 编译vxe-table包里的es6代码，解决IE11兼容问题
    config.module
      .rule('vxe')
      .test(/\.js$/)
      .include
        .add(resolve('node_modules/vxe-table'))
        .add(resolve('node_modules/vxe-table-plugin-antd'))
        .end()
      .use()
      .loader('babel-loader')
      .end()

  },

  css: {
    // loaderOptions: {
    //   less: {
    //     modifyVars: {
    //       /* less 变量覆盖，用于自定义 ant design 主题 */
    //       'primary-color': '#1C6DF2',
    //     },
    //     javascriptEnabled: true,
    //   }
    // }
  },

  devServer: {
    port: 9999,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3333', 
        changeOrigin: true
      },
    }
  },

  lintOnSave: undefined
}