const path = require('path')
const CracoLessplugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: CracoLessplugin, }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}