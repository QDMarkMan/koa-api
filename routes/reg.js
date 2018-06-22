const router = require('koa-router')()
const User = require('../db/UserModel')
require('../service/UserEntityService')

// 查看页面
router.get('/reg', async (ctx, next) => {
  await ctx.render('reg', {
    title: 'Hello DB'
  })
})
/**
 * 简单得提交注册得demo
 */
router.post('/api/doReg', async (ctx, next) => {
  const para = ctx.request.body
  /**
   * 1:promise异步存储数据
   */
  User.create({
    userId: Date.now(),  
    userName: para.userName,  
    password: para.password
  }).then(res =>{

  }).catch(res => {

  })
  /**
   * 2:await异步存储数据
   */
  var userEntity =  await  User.create({  
    userId: Date.now(),  
    userName: para.userName,  
    password: para.password
  })
  console.log('created: ' + JSON.stringify(userEntity))
  // 返回回执
  ctx.body = {
    succeed: true,
    message: '注册成功',
    code: 200
  }
})
/**
 * 用户模块
 */
router.get('/api/user', async (ctx, next) => {
  let data = {}
  // 数据库取数据
  await User.findAll().then(user => {
    data = user
  })
  ctx.body = data
})

module.exports = router
