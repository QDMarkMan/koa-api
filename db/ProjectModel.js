/**
 * 项目表
 * 定义表格
 */
const sequelize = require('./index')
const Sequelize = require('sequelize')
const UuidService = require ('../service/UuidService')
const UUID = require('uuid')
/**
 * 创建数据库模型
 */
const Project = sequelize.define('ppm_project', {
  id: { // 主键
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  project_name: {
    type: Sequelize.STRING, // 项目名称
  },
  project_nicname: {
    type: Sequelize.STRING // 项目别名
  },
  project_id: {
    type: Sequelize.STRING // 项目id
  },
  start_date: {
    type: Sequelize.DATE // 开始时间
  }
}, {
  freezeTableName: true // 模型表名和数据库名称一致
})
/**
 * 项目表
 */
class ProjectModel{
  // 创建项目
  createProject(data){
    const key = UUID.v1()
    // project数据
    const project = {
      project_name: data.name,
      project_id: (new UuidService()).generateId(),// 根据时间戳随机生成userId
      project_nicname: data.nickname
    }
    // 没有表的时候创建表
    /**
     * Project.sync() 方法是用来同步所有尚未在数据库中的模型
     * Project.sync({force: true}) 强制同步所有模型
     */
    Project.sync().then(() => {
      // 表已创建
      return new Promise((resolve, reject) => {
        Project.create(project).then(res => {
          resolve({
            result: res,
            success:true,
            code: 200
          })
        }).catch(error => {
          reject(error)
        })
      })
    }).catch(error => {
      console.log(error)
    })
  }
  /**
   *查询全部项目 
   */
  async FreateAllProject (){
    let data = {}
    console.log(`执行查询方法`)
    await Project.findAll().then(projects => {
      data = projects
    }).catch(res => {
      console.log(res)
    })
    return data
  }
}

module.exports =  new ProjectModel() 