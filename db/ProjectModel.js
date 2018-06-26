/**
 * 项目表
 * 定义表格
 */
const sequelize = require('./index')
const Sequelize = require('sequelize')
const UUID = require('uuid')

const Project = sequelize.define('ppm_project', {
  /* id: {
    type: Sequelize.STRING,
    primaryKey:true,
    allowNull:false,
    // defaultValue:DataTypes.UUIDV1
  }, */
  project_name: {
    type: Sequelize.STRING
  },
  project_nicname: {
    type: Sequelize.STRING
  },
  project_id: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // 模型表名和数据库名称一致
})
class ProjectModel{
  // 创建项目
  createProject(data){
    const key = UUID.v1()
    console.log(data)
    // project数据
    const project = {
      project_name: data.name,
      project_id: key,// 根据时间戳随机生成userId
      project_nicname: data.nickname
    }
    // 没有表的时候创建表
    Project.sync().then(() => {
      // 表已创建
      return new Promise((resolve, reject) => {
        Project.create(project).then(res => {
          resolve({
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
}

module.exports =  new ProjectModel()