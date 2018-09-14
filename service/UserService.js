const BaseService = require('./BaseService')
const AccountModel = require('../db/model').AccountModel
const UserModel = require('../db/model').UserModel
class UserService extends BaseService {
  // sessionID
  SessionId = ''
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
    let result
    try {
      result = await UserModel.create(user)
    } catch (error) {
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