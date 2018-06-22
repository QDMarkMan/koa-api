/**
 * 用户模型实体操作
 * 主要是对象的增删改
 */
/**
 * uuid 模块用于生成用户或者其他唯一标识
 * https://github.com/kelektiv/node-uuid
 */
const UUID = require('uuid')
// 唯一id
const ID = UUID.v1()

const UserModel = require('../db/UserDao')

class UserService{

}
