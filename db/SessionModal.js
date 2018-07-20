/*
 * @Author: etf 
 * @Date: 2018-07-19 11:55:41 
 * @Last Modified by: etf
 * @Last Modified time: 2018-07-19 18:56:48
 * session 数据库存储相关
 */
const sequelize = require('./index')
const Sequelize = require('sequelize')

const Session = sequelize.define('_mysql_session_store', {
    id: {
      type: Sequelize.STRING(255),// session key
      primaryKey: true,// 定义主键
      allowNull: false
    },
    data: {
      type: Sequelize.TEXT // session保存的值
    },
    expires: {
      type: Sequelize.BIGINT(20) // 时间
    }
  },{
    timestamps: false, // 不添加时间戳属性 (updatedAt, createdAt)
    freezeTableName: true, // 冻结名称
    comment: 'session数据存储' // 注释
  }
)
/**
 * session 数据库模型
 */
class SessionModal {
  async GetSeeionById(data){ // 按照数据查询
    let returnObject = {}
    await Session.findOne({
      where: {
        data
      }
    }).then(session => {
      console.log(`查询session`);
      returnObject = session
    })
    return returnObject
  }
}

module.exports = new SessionModal()