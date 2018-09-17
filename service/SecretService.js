/*
 * @Author: etf 
 * @Date: 2018-07-19 16:17:34 
 * @Last Modified by: etf
 * @Last Modified time: 2018-09-17 17:10:36
 * 密码加密模块
 */
let crypto
const Util = require('../utils/index')
/**
 * 以防不支持
 */
try {
  crypto = require('crypto');
} catch (err) {
  console.log('不支持 crypto!');
}
class SecretService {
  constructor () {
    this.SECRET_KEY = 'project_management' // 加密解密key
  }
  /**
   * 生成密码 ==> 不可逆操作
   * @author etf
   * @param {*} value 
   */
  generatePassportKey(password) {
    let encoded
    console.log(Util.judgeObjType(password))
    if (Util.judgeObjType(password) !== 'String' || password === '') {
      encoded = ''
    } else {
      encoded = crypto.createHash('sha1').update(password).digest('hex')
    }
    return encoded
  }
  /**
   *  aes192加密模块
   *  可逆加密方式
   * @param {*明文} value 
   */
  encodeKey(value){
    let cipher = crypto.createCiper("aes192", this.SECRET_KEY)
    let enc = cipher.update(value, "utf-8", "hex")
    enc += cipher.final('hex')
    return enc
  }
  /**
   * aes192解密模块
   * @param {*密文} key 
   */
  decodeKey(key){
    let deCipher = crypto.createDecipher("aes192", this.SECRET_KEY)
    let dec = deCipher.update(content,"hex","utf8")
    dec += cipher.final("utf8")
    return dec
  }
}
module.exports = new SecretService()