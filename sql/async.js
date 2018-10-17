/*
 * @Author: etongfu 
 * @Date: 2018-10-17 17:07:45 
 * @Last Modified by:   etongfu 
 * @Last Modified time: 2018-10-17 17:07:45 
 * 同步本地sql文件
 */
const mysql = require('mysql')
const chalk = require('chalk')
const DB = require('../config').DB
const sqlContentMap   = require('./get-sql-content-map')()
// 数据库会话
const pool = mysql.createPool({
  host     :  DB.host,
  port     :  DB.port,
  user     :  DB.user,
  password :  DB.password,
  database :  DB.database
})
// test
const query = async (sql, value) => {
  return await new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        /**
         * sql: sql语句
         * value: 值
         */
        connection.query(sql, value, (err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }

    })
  })
}
/**
 * 打印脚本执行日志
 * @param {*string} err 错误
 * @param {*string} sqlFile  sql文件
 * @param {*number} index 行数 
 */
const eventLog = function (err, sqlFile, index) {
  if (err) {
    console.log(chalk.green(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败！`))
  } else {
    console.log(chalk.green(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 `))
  }
}
// 执行建表sql语句
const createAllTables = async () => {
  for (const key in sqlContentMap ) {
    if (sqlContentMap.hasOwnProperty(key)) {
      console.log(chalk.yellow(`执行解析${key}文件`));
      let sqlShell = sqlContentMap[key]
      let sqlShellList = sqlShell.split(';')
      // 逐句执行sql语句
      for (const [i, shell] of sqlShellList.entries()) {
        // console.log(shell)
        if (shell.trim()){
          //插入完执行验证
          let result = await query( shell )
          if ( result.serverStatus * 1 === 2 ) {
            eventLog( null,  key, i)
          } else {
            eventLog( true,  key, i) 
          }
        }
      }
      
    }
  }
  console.log(chalk.yellow('sql脚本执行结束！'))
  process.exit(0)
}
createAllTables()
