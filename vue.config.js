const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 如果使用 less-loader 7.x，可以使用 lessOptions 字段
        // lessOptions: {
        //   strictMath: true,
        //   noIeCompat: true
        // }
      }
    }
  }
})
