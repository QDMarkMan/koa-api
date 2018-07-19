const router = require('koa-router')()
/**
 * 登陆模块
 */
router.get('/login', async (ctx, next) => {
  ctx.session.user= {
    username: 'zhangsan',
    password: '123456'
  }
  await ctx.render('login', {
    title: 'Hello DB'
  })
})

module.exports = router