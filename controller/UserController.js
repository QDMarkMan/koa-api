const controller = require('koa-router')()
const UserService = require('../service/UserService')
/**
 * 注册
 */
UserService.post('/login', async (ctx, next) => {
  ctx.session.user= {
    username: 'zhangsan',
    password: '123456'
  }
  await ctx.render('login', {
    title: 'Hello DB'
  })
})

module.exports = controller