## Description
基于vue2+koa2的前后端同构模板项目  
🤨**傻大黑粗**🌚  
作为自己一个实验的模板项目，通过不断的学习重构/添加，以供尝试

## 文档页
https://superbiger.github.io/supergo/#/zh-CN

## Features
* cli 工具(初步支持插件化)
* 组件库&文档集成
* "面向对象"-SASS 封装
* koa2 中台代理
* 完整支持 typescript & tslint
* hubot集成
* devOps封装  

## Warning
**Slack Hubot Token is any more useless where in supergo.config.json,Please use your own 🤪**

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
    |-- alpha-charts        // 可视化相关
    |-- alpha-motion        // 动画交互
    |-- alpha-ui            // 后台组件
    |-- include             // SDK Kit
    |-- scripts             // Hubot
        |-- base            // 封装
        |-- handler         // 执行入口
        |-- interval        // 定时器
        |-- listener        // 路由监听
        |-- service         // 服务
    |-- server              // 管理中台
    |-- client              // 管理后台 UI
        |-- assets          // 资源
        |-- components      // 业务组件
        |-- config          // 项目配置
        |-- directive       // 自定义指令集
        |-- views           // 界面
        |-- main.ts         // vue 入口
|-- test                    // 测试
|-- typings                 // *.d.ts
|-- Dockerfile                    
|-- external-scripts.json   // hubot 插件注册
|-- supergo.config.js       // 统一配置文件
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
**doc server**
```shell
    yarn run dev:docs
```

## Config
please see the [Documents](./config/README.md)
```
    yarn run help
```
