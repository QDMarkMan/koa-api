const controller = require('koa-router')()
let UserService = require('../service/UserService')
UserService = new UserService()
console.log(`引入用户controller成功`)
controller.prefix('/api')
/**
 * 注册controller
 */
controller.post('/register', async (ctx, next) => {
  // 参数
  const para = ctx.request.body
  // 返回结果
  let result
  try {
    // 检测到空值立马验证
    let returnObj =  await UserService.registerUser(para)
    result = returnObj
  } catch (error) {
    console.log(error)
    return ctx.body = {
      code: -1,
      succeed: false,
      msg: '系统异常'
    }
  }
  ctx.body = result
})

module.exports = controller
