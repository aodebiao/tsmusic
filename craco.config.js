const path = require('path')
const CracoLess = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
    plugins:[
        {
            plugin:CracoLess  // 新版antd不配置也行
        }
    ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
