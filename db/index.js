/**
 * 数据库连接
 */
 const Sequelize = require('sequelize')
 const config = require('../config/index')
 const chalk = require('chalk')
 const log = console.log
 const DB = config.DB
 const sequelize = new Sequelize(  
  DB.database, // 数据库名  
  DB.user,   // 用户名  
  DB.password,   // 用户密码  
  {  
      'dialect': 'mysql',  // 数据库使用mysql  
      'host': DB.host, // 数据库服务器ip  
      'port': DB.port,        // 数据库服务器端口  
      'define': {  
          // 字段以下划线（_）来分割（默认是驼峰命名风格）  
          'underscored': true  
      }  
  }  
)
// 验证连接
sequelize.authenticate().then(() => {
    log(chalk.green(`Connection ${DB.database} has been established successfully`))
  })
.catch(err => {
  // console.error('Unable to connect to the database:', err);
  log(chalk.red(`Connection ${DB.database} fail`))
})

module.exports = sequelize
