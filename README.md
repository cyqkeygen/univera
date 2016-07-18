# Univera - An Universal Application Architecture [![Build Status](https://travis-ci.org/very-geek/univera.svg?branch=develop)](https://travis-ci.org/very-geek/univera) [![Coverage Status](https://coveralls.io/repos/github/very-geek/univera/badge.svg?branch=develop)](https://coveralls.io/github/very-geek/univera?branch=develop)

## 简易测试说明

1. 克隆至本地
1. 确保有 node.js 环境 (>= 4)
1. `npm install` 安装所需依赖
1. `npm start` 直接运行于开发模式，自动开启本地 HTTP Server，默认地址：http://localhost:3000，可用于本地调试
1. `npm run build` 将会自动构建生成适合生产环境部署的代码，其中 `public` 目录下是所有的静态资源，`output` 则是用于 SSR 的 node.js 服务端；后者可直接使用 `NODE_ENV=production node output` 运行，默认地址：http://localhost:3000
1. `npm run stage` 将会合并上述步骤，可用于快速验证部署代码有效性
