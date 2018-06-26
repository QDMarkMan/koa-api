const router = require('koa-router')()
const ProjectModel = require('../db/ProjectModel')

/**
 * 简单得提交注册得demo
 */
router.post('/api/addProject', async (ctx, next) => {
  const para = ctx.request.body
  /**
   * 新增项目
   */
  console.log(para.nickname)
  const projectEntity =  {  
    name: para.name, 
    nickname: para.nickname
  }
  await ProjectModel.createProject(projectEntity)
  ctx.body = {
    succeed: true,
    message: '注册成功',
    code: 200
  }
})


module.exports = router
