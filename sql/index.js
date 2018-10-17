/**
 * 初始化 sql数据库
 */
const MySQL = require('mysql')
const chalk = require('chalk')
const DB = require('../config').DB
/**
 * create sql session
 */
const connection = MySQL.createConnection({
  host     :  DB.host,
  port     :  DB.port,
  user     :  DB.user,
  password :  DB.password,
  database :  DB.database
})
/**
 * create pool
 */
const pool = MySQL.createPool({
  connectionLimit :  10,
  host            :  DB.host,
  port            :  DB.port,
  user            :  DB.user,
  password        :  DB.password,
  database        :  DB.database
})
/**
 * 测试连接
 */
const connectTest = function (){
  // connection test
  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack)
      console.log(chalk.red(`Connection DB ${DB.database} fail`))
      return 
    }
    console.log(chalk.green(`Connection DB ${DB.database} by mysql successfully`))
    // 
  })
  connection.end()
}
/**
 * 查询数据库中数据
 * @param {*} sql 
 * @param {*} value 
 */
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
 * 创建table
 * @param {*} sql 
 */
const createTable = (sql) => query(sql, [])
/**
 * 查询表中全部数据
 * @param {*} table 
 */
const findAll = (table) => {
  let sql = `SELECT * FROM ${table}`
  return query (sql)
}
/**
 * 根据id查询表数据
 * @param {*} table 
 * @param {*} id 
 */
const findDataById = (table, id) => {
  let sql = `SELECT * FROM ${table} WHERE id = "${id}" limit 1`
  return query(sql, [ table, id])
}
/**
 * 插入数据
 * @param {*} table 
 * @param {*} values 
 */
const insertData = (table, values) =>{
  let sql = `INSERT INTO ?? SET ?`
  return query(sql, [table, values])
}
/**
 * 更新操作
 * @param {*} table 
 * @param {*} values 
 * @param {*} key 主键
 */
const updateData = (table, values, id) => {
  let sql = `UPDATE ?? SET ? WHERE id = ?`
  return query(sql, [table, values, id])
}
/**
 * 更新用户
 * @param {*} table 
 * @param {*} values 
 * @param {*} id 
 */
const updateUser = (table, values, id) => {
  let sql = `UPDATE ?? SET ? WHERE userId = ?`
  return query(sql, [table, values, id])
}
/**
 * 删除表中一个数据
 * @param {*} table 
 * @param {*} keyValue 
 * @param {*} keyName 
 */
const deleteDataById = (table, keyValue,  keyName = 'id') => {
  let sql = `DELETE FROM ?? WHERE ${keyName} = ?`
  return query(sql, [table, keyValue])
}
/**
 * 从表中查询keys的数据
 * @param {*} table 
 * @param {*} keys 
 */
const select = (table, keys) => {
  let sql = `SELECT ?? FORM ??`
  return query(sql, [keys, table])
}
/**
 * 统计表数据
 * @param {*} table 
 */
const count = (table) => {
  let sql = `SELECT COUNT(*) AS total_count FROM ??`
  return query(sql, [table])
}

module.exports = {
  query,
  connectTest,
  findAll,
  createTable,
  findDataById,
  insertData,
  updateData,
  updateUser,
  deleteDataById,
  select,
  count
}
