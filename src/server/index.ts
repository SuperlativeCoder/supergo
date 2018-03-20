import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
import * as logger from 'koa-logger'
import * as path from 'path'

const port = process.env.port

const app = new Koa()

app.use(logger())
app.use(koaStatic('../client'))

app.listen(process.env.port)
console.log(`Server running on port ${process.env.port}`)