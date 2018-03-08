<p align="center">
    <img src="./assets/logo.png"/>
</p>

## Description
hubot for slack

## Features

## Warning
**Token is any more useless where in package.json,Please use your own 🤪**

## Mapping
```js
|-- assets                  // 项目静态资源
|-- base/handlers           // shellcmd 脚本命令文件
|-- build                   // 构建/工程执行入口
|-- config                  // 配置
|-- docs                    // 文档
|-- scripts                 // 注册入口
|-- public
|-- src       
    |-- include             // Hubot-Server Kit
    |-- locale              // 国际化
    |-- scripts             // Hubot
        |-- base                // 封装
        |-- handler             // 执行入口
        |-- interval            // 定时器
        |-- listener            // 路由监听
        |-- service             // 服务
    |-- server              // 管理后台
    |-- view                // 管理后台 UI
|-- test                    // 测试
|-- typings                 // *.d.ts
|-- Dockerfile                    
|-- external-scripts.json   // hubot 插件注册
|-- supergo.config.js       // 配置文件
|-- tsconfig.json           // TS 配置
|-- tslint.json             // TSlint 配置
```

## Develop
**hubot server**
```shell
    yarn run hubot
```
**development server**
```shell
    yarn run dev
```

## Config
please see the [Documents](./config/README.md)
```
    // supergo-service help
    yarn run help
```
