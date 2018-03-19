import * as Koa from 'koa'
import * as koaWebpack from 'koa-webpack'
import * as logger from 'koa-logger'

const app = new Koa()

app.use(logger())

if (process.env.NODE_ENV === 'development') {
  const webpackConfig = require('./build/lib/webpack/client.webpack.dev.conf')
  app.use(koaWebpack({
      config: webpackConfig
  }))
}

app.listen(3000)
console.log(`Server running on port 3000`)