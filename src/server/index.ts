import * as Koa from 'koa'
import * as webpack from 'webpack'
import * as koaWebpack from 'koa-webpack'
import * as koaStatic from 'koa-static'
import * as logger from 'koa-logger'
import * as path from 'path'
import { WebpackDevMiddleware } from 'webpack-dev-middleware';

const port = process.env.port

const app = new Koa()

app.use(logger())

if (process.env.NODE_ENV === 'development') {
  const config = require('../../build/lib/config/client/webpack.dev.conf')
  app.use(koaWebpack({
      config: config,
      hot: { log: false, heartbeat: 2000 },
      dev: { publicPath: '/', stats: 'none', logLevel: 'error' }
  }))
}
console.log(path.resolve(__dirname, '../..' ,'./dist/client'))
app.use(koaStatic(path.resolve(__dirname, '../..' ,'./dist/client')))

app.listen(process.env.port)
console.log(`Server running on port ${ process.env.port }`)