const dbUtils = require('../sql/index')
const table = 'team_users'
module.exports =  class UserModel {
  /**
   * 创建用户
   * @param {*} user 
   */
  static async createUser (user) {
    // console.log(user)
    let result
    // 查询用户是否已经存在
    try {
      result = await dbUtils.insertData(table, user)
    } catch (error) {
      console.log(error)
    }
    return result
  }
  /**
   * 查找一个存在的用户
   * @param {*} para 
   */
  static async findUserByNameOrPhone (para) {
    let result
    const sql = `SELECT * FROM ${table} WHERE phone = "${para.phone}" or username = "${para.username}" limit 1`
    try {
      result = await dbUtils.query
      (sql)
      if ( Array.isArray(result) && result.length > 0 ) {
        result = result[0]
      } else {
        result = null
      }
    } catch (error) {
      console.log(error)
    }
    return result
  }
  /**
   * 查询全部用户
   */
  static async findAllUsers () {
    let result 
    try {
      result = await dbUtils.findAll(table)
    } catch (error) {
      console.log(error)
    }
    return result
  }
  /**
   * 根据id删除用户
   */
  static async deleteUserById (id) {
    let result 
    try {
      result = await dbUtils.deleteDataById(table,id)
    } catch (error) {
      console.log(error)
    }
    return result
  }
}