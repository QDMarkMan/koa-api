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
  const projectEntity =  {  
    name: para.name, 
    nickname: para.nickname
  }
  ctx.session.user = projectEntity
  await ProjectModel.createProject(projectEntity)
  ctx.body = {
    succeed: true,
    message: '注册成功',
    code: 200
  }
})

router.post('/api/getProjects', async (ctx, next) => {
  let returnObj = {}
  /* await ProjectModel.FreateAllProject().then((result) => {
    returnObj = result
  }).catch((err) => {
    
  }) */
  returnObj = await ProjectModel.FreateAllProject()
  ctx.body = returnObj
})


module.exports = router
