import * as Koa from 'koa'
import * as koaWebpack from 'koa-webpack'
import * as koaStatic from 'koa-static'
import * as logger from 'koa-logger'
import * as path from 'path'

const port = process.env.port

const app = new Koa()

app.use(logger())

if (process.env.NODE_ENV === 'development') {
  app.use(koaWebpack({
      config: require('../../build/lib/config/client/webpack.dev.conf')
  }))
}
app.use(koaStatic(path.resolve(__dirname, '../..' ,'./dist/client')))

app.listen(3000)
console.log(`Server running on port 3000`)