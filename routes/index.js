// 整合router
const router = require('koa-router')()
// 需要导入的router
const routerMap = ['home', 'users', 'login', 'reg', 'project', 'edit']
console.log()
// 织入路由
routerMap.forEach(el => {
  // console.log(require(`./${el}`))
  const curRouter = require(`./${el}`)
  router.use(curRouter.routes(), curRouter.allowedMethods())
})
module.exports = router