const controller = require('koa-router')()
let UserService = require('../service/UserService')
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
      success: false,
      msg: '系统异常'
    }
  }
  ctx.body = result
})
/**
 * 登录controller
 */
controller.post('/login', async (ctx, next) => {
  const para = ctx.request.body
  console.log(para)
  let result 
  try {
    result = await UserService.userLogin(para)
  } catch (error) {
    console.log(error)
    return ctx.body = {
      code: -1,
      success: false,
      msg: '系统异常'
    }
  }
  ctx.body = result
})
/**
 * 获取全部用户
 */
controller.post('/getAllUsers', async (ctx, next) => {
  let result
  try {
    result = await UserService.getUsers()
  } catch (error) {
    console.log(error)
  }
  ctx.body = result
})
/**
 * 获取单个用户
 */
controller.post('/getUserById', async (ctx, next) => {
  let result 
  const userId = ctx.request.body.id
  if (!userId) {
    return ctx.body = 'userId 不能为空'
  }
  try {
    result = await UserService.getUserById(userId)
  } catch (error) {
    console.log(error)
  }
  ctx.body = result
})
/**
 * 删除用户
 */
controller.post('/deleteUser', async (ctx, next) => {
  const para = ctx.request.body
  let result
  try {
    result = await UserService.deleteUser(para)
    if (result) {
      result = {
        code: 200,
        success: true,
        msg: '删除成功'
      }
    }
  } catch (error) {
    console.log(error)
    result = {
      code: -1,
      success: false,
      msg: '删除失败'
    }
  }
  ctx.body = result
})

module.exports = controller
