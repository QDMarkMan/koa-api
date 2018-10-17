const BaseService = require('./BaseService')
// const UserModel = require('../db/model').UserModel
const UserModel = require('../models/user-model')
const { switchJsonType } = require('../utils/data-util')
let UuidService = require('./UuidService')
let SecretService = require('./SecretService')
class UserService extends BaseService {
  // sessionID
  constructor () {
    /**
     * 继承父类
     */
    super()
  }
  /**
   * 创建新用户
   * @param {*} user 
   */
  static async registerUser (data) {
    let result
    // 处理para
    let user = switchJsonType(data)
    const exitUser = await UserModel.findUserByNameOrPhone(data)
    if (exitUser) {
      return result = {
        code: -1,
        msg: "创建失败,用户已存在",
        success: false
      }
    }
    // 对数据进行处理
    user.id = UuidService.generateId()
    user.password = SecretService.generatePassportKey(user.password)
    try {
      result = await UserModel.createUser(user)
      console.log(result)
      if (result) {
        result = {
          code: 200,
          msg: "创建成功",
          success: true
        }
      }
    } catch (error) {
      console.log(error)
      result = {
        code: -1,
        msg: "创建失败",
        success: false
      }
    }
    return result
  }
  /**
   * 通过userId 获取信息
   * @param {*} userId 
   */
  static async getUserById (userId) {
    let result
    try {
      result =  await UserModel.findUserById(userId)
      if (result) {
        result = switchJsonType(result, 'undelineToCamel')
      }
    } catch (error) {
      console.log(error)
      result = {
        code: -1,
        msg: "查询失败",
        succeed: false
      }
    }
    return result
  }
  /**
   * 用户登录service
   * @param {*} param 
   */
  static async userLogin (param) {
    let result
    const password = SecretService.generatePassportKey(param.password)
    const username = param.username
    try {
      result =  await UserModel.findUserByUsername({password, username})
      // console.log(result)
    } catch (error) {
      console.log(error)
      result = {
        code: -1,
        msg: "查询失败",
        succeed: false
      }
    }
    return result
  }
  /**
   * 查询全部用户
   */
  static async getUsers () {
    let result 
    try {
      result =  await UserModel.findAllUsers()
    } catch (error) {
      console.log(error)
      result = {
        code: -1,
        msg: "查询失败",
        succeed: false
      }
    }
    return result
  }
  /**
   * 删除指定用户
   * @param {*} id 
   */
  static async deleteUser (para) {
    const id = para.id
    let result 
    try {
      result = await UserModel.deleteUserById(id)
    } catch (error) {
      console.log(error)
      result = {
        code: -1,
        msg: "删除失败",
        succeed: false
      }
    }
    return result
  }
  /**
   * 编辑用户
   */
  static async userEdit(id,user) {
    let result 
    // 进行驼峰转化
    user = switchJsonType(user)
    user.reg_date = "2018-10-17 17:47:00"
    try {
      result = await UserModel.updateUser(user, id)
      console.log(result)
    } catch (error) {
      console.log(error)
      result = {
        code: -1,
        msg: "编辑失败",
        succeed: false
      }
    }
    return result
  }
}
module.exports = UserService