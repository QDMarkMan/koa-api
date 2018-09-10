/**
 * 数据库连接
 */
const Sequelize = require('sequelize')
const config = require('../config/index')
const chalk = require('chalk')
const log = console.log
const DB = config.DB
 /**
  * Object-Relational Mapping  
  * ORM映射
  * 在当前的系统中注意mysql是驱动，我们不直接使用，但是sequelize会用
  */
const sequelize = new Sequelize(  
DB.database, // 数据库名  
DB.user,   // 用户名  
DB.password,   // 用户密码  
{
    dialect: 'mysql',  // 数据库使用mysql  
    host: DB.host, // 数据库服务器ip  
    port: DB.port, // 数据库服务器端口  
    define: {  
        // 字段以下划线（_）来分割（默认是驼峰命名风格）  
        'underscored': true  
    },
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }  
}  
)
// 测试数据库连接
sequelize.authenticate().then(() => {
    log(chalk.green(`Connection DB ${DB.database} has been established successfully`))
}).catch(err => {
    log(chalk.red(`Connection DB ${DB.database} fail`))
})

module.exports = sequelize
