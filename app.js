const Koa = require('koa')
const app = new Koa()
const config = require('./config')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const routers = require('./routes/index')
/**
 * session 模块 重新使用 koa-mysql-session + koa-session-minimal
 */
const session = require('koa-session-minimal')   // 使用于提供存储介质的读写接口
const MysqlStore  =  require('koa-mysql-session')// 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作
/**
 * koa-sql-session这个包实际上是为我们在数据库中创建了session的表  以及封装了session的表操作
 */
// session存储配置
const SESSION_MYSQL_CONFIG = {
  user: config.DB.user,
  password: config.DB.password,
  database: config.DB.database,
  host: config.DB.host,
  port: config.DB.port
}
app.use(session({
  key: config.session_key,
  maxAge: 60 * 60 * 24,                         // cookie的过期时间 maxAge in ms (default is 1 days)
  store: new MysqlStore(SESSION_MYSQL_CONFIG),  //mysql存储session设置
  rolling: false,                               //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  cookie: {
    signed: true,                               // 默认签名
    maxAge: config.sessionTimeout,              // cookie的过期时间 maxAge in ms (default is 1 days)
    httpOnly: true,                             // 是否只用于 http 请求中获取
    overwrite: false                            // 是否允许重写
  }
}))
// 测试session
/* app.use(async (ctx) => {
  if (ctx.url === '/set') {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    }
    ctx.body = ctx.session
  } else if (ctx.url === '/get') {
    ctx.session.count = ctx.session.count + 1
    ctx.body = ctx.session
  }
}) */

const logger = require('koa-logger')
// 连接db squlize
require('./db/index')
// 连接mysql 数据库
const {connectTest} = require('./sql/index')
connectTest()
// 处理中间件
const response_formatter = require('./middleware/response_formatter');
// error handler
onerror(app)
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// file
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// 格式化API格式 仅仅格式化/api结尾
app.use(response_formatter('^/api'))
// routes
app.use(routers.routes(),routers.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
