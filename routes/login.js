const router = require('koa-router')()
/**
 * 登陆模块
 */
router.get('/login', async (ctx, next) => {
  await ctx.render('login', {
    title: 'Hello DB Login'
  })
})

module.exports = router