// 整合router
const router = require('koa-router')()

/* const index = require('./home')
const users = require('./users')
const reg = require('./reg')
const login = require('./login')
const project = require('./project')
router.use(index.routes(), index.allowedMethods())
router.use(users.routes(), users.allowedMethods())
router.use(reg.routes(), reg.allowedMethods())
router.use(login.routes(), login.allowedMethods())
router.use(project.routes(), project.allowedMethods()) */
const routerMap = ['home', 'users', 'reg', 'login', 'project']
// 织入路由
routerMap.forEach(el => {
  // console.log(require(`./${el}`))
  const curRouter = require(`./${el}`)
  router.use(curRouter.routes(), curRouter.allowedMethods())
})
module.exports = router