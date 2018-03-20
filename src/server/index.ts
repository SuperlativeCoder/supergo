import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
import * as logger from 'koa-logger'

const app = new Koa()
// const publicFolder = ''

app.use(logger())
// app.use(koaStatic(publicFolder))

app.listen(3000)
console.log(`Server running on port 3000`)