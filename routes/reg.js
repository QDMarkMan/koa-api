const router = require('koa-router')()
/* const GetSession = require('../service/LoginService')
GetSession(JSON.stringify(ctx.session)).then(res => {
  console.log(`查询到的sessionId${res.id}`)
}) */
// 查看页面
router.get('/reg', async (ctx, next) => {
  await ctx.render('reg', {
    title: 'team'
  })
})
module.exports = router
