# supergo
a robut project

## WARNING
**Token is any more useless where in package.json,Please use your own 🤪**

## MAPPING
```js
|-- base/handlers           // shell/cmd 脚本命令文件
|-- docker                  // Dockerfile
|-- scripts                 // 注册入口
|-- src       
    |-- scripts             // Hubot
        |-- base                // 封装
        |-- events              // 事件
        |-- handler             // 执行入口
        |-- help                // 帮助
        |-- interval            // 定时器
        |-- service             // 服务
        |-- listener            // 路由监听
    |-- server              // 管理后台
    |-- superkit            // Hubot-Server Kit
    |-- ui                  // 管理后台 UI
```

## RUN
```shell
    npm run start
```
**or**
```
    docker build -t supebiger/supergo .
```
