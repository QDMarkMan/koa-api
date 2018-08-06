const BaseService = require('./BaseService')
const AccountModel = require('../db/model').AccountModel
const UserModel = require('../db/UserModel')
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
  registerUser (user) {

  }
  /**
   * 获取当前登录用户的信息
   */
  getUserInfo () {

  }
}
module.exports = UserService