# 我的项目

项目相关说明。

## 相关配置

### `@路径重定向`

使用`@`符号，定位至`src/`目录下。

这里用到一个第三方包`craco`。

```shell
npm i @craco/craco@alpha -D
```

创建craco.config.js配置文件(根目录)

```js
const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
```

配置config.json

```json
"baseUrl": ".",
"paths": {
    "@/*": [
        "src/*"
    ]
}
```





