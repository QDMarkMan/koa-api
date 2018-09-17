const BaseService = require('./BaseService')
const UserModel = require('../db/model').UserModel
let UuidService = require('./UuidService')
let SecretService = require('./SecretService')
class UserService extends BaseService {
  // sessionID
  constructor () {
    /**
     * 继承父类
     */
    super()
    console.log(this.demo)
  }
  /**
   * 创建新用户
   * @param {*} user 
   */
  async registerUser (user) {
    // 对数据进行处理
    user.id = UuidService.generateId()
    user.password = SecretService.generatePassportKey(user.password)
    let result
    try {
      result = await UserModel.createUser(user)
      if (result.succeed) {
        result = result.data
      }
    } catch (error) {
      console.log(error)
      result = {
        code: -1,
        msg: "创建失败",
        succeed: false
      }
    }
    return result
  }
  /**
   * 通过userId 获取信息
   * @param {*} userId 
   */
  async getUserById (userId) {
    let result
    try {
      result =  await UserModel.findOne({
        where: {id: userId}
      })
    } catch (error) {
      result = {
        code: -1,
        msg: "查询失败",
        succeed: false
      }
    }
    return result
  }
}
module.exports = UserService