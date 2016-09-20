# Request for [Worktile](https://worktile.com)

Request 提供一个地址可以接收任何HTTP请求，并把结果展现出来，用于审查HTTP客户端发送的内容或Webhook调试。

访问地址：http://request.worktile.com

## 使用技术

Node.js 0.12.x + Angular.js 1.4.x + sequelize(默认数据库 sqlite)

## 安装步骤

1. 安装 Node.js、Git 客户端；

1. 执行 `git clone https://github.com/worktile/request` 获取代码到本地

1. 执行 `npm install gulp -g` 和 `npm install bower -g` 安装 gulp 和 bower 工具；

1. 切换到代码根路径下，执行 `npm install` 和 `bower install` 安装服务端模块和前端模块；

1. 执行 `gulp` 生成 js，打开 http://localhost:8800 即可；

1. 执行 `gulp build` 压缩合并js 和 css；

1. 生产环境直接使用 bin/prod-web.sh 脚本启动，默认使用 pm2启动。


## 目录结构

1. server 文件夹主要存放服务端相关代码
1. www 存放前端相关代码文件
1. app.js 是启动文件

```
.
|-- bin
|-- data
|-- server
|   |-- config
|   |-- controller
|   |-- core
|   `-- data
|-- test
|-- www
|   |-- static
|   |   |-- css
|   |   |   `-- lib
|   |   |-- dist
|   |   |-- fonts
|   |   |-- img
|  |   `-- js
|  `-- view
|      `-- shared
|-- app.js
```
