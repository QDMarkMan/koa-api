const router = require('koa-router')()
/**
 * 登陆模块
 */
router.get('/login', async (ctx, next) => {
  await ctx.render('login', {
    title: 'login'
  })
})

module.exports = router