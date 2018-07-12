/**
 * 用户模型实体操作
 * 主要是对象的增删改
 */
/**
 * bcrypt 模块是用于crypt是一种跨平台的文件加密工具。bcrypt 使用的是布鲁斯·施内尔在1993年发布的 Blowfish 加密算法。由它加密的文件可在所有支持的操作系统和处理器上进行转移。它的口令必须是8至56个字符，并将在内部被转化为448位的密钥。
 * uuid 模块用于生成用户或者其他唯一标识
 * https://github.com/kelektiv/node-uuid
 */
const UUID = require('uuid')
const bcrypt = require('bcryptjs')
// 定义加密密码强度
const USER_SECRET_KEY =  10
// 唯一id
const ID = UUID.v1()

const UserModel = require('../db/UserDao')

class UserService{
  

}
