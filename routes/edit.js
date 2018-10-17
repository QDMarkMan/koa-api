// 编辑用户
const router = require ('koa-router')()

router.get('/edit',async (ctx, next) => {
  
  await ctx.render('user_edit', {
    title: 'team'
  })
})

module.exports = router