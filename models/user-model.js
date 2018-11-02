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
      result = await dbUtils.query(sql)
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
   * 根据用户名查找用户
   * ==> 查找必须是已经存在的用户
   * @param {*用户名 不能为空} username 
   */
  static async findUserByUserName (username = "") {
    const sql = `SELECT * FROM ${table} WHERE username = '${username}' LIMIT 1`
    let result
    try {
      result = dbUtils.query(sql)
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
  /**
   * 根据id查询用户信息
   * @param {id} id 
   */
  static async findUserById (id) {
    let result 
    try {
      result = await dbUtils.findDataById(table, id)
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
   * 更新编辑用户
   * @param {*} para 
   */
  static async updateUser (data, id) {
    let result
    try {
      result = await dbUtils.updateData(table, data, id)
    } catch (error) {
      console.log(error)
    }
    return result
  }
}