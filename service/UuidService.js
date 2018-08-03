/*
 * @Author: etf 
 * @Date: 2018-07-20 10:19:46 
 * @Last Modified by: etf
 * @Last Modified time: 2018-08-03 17:47:24
 * 生成并返回RFC4122 v1（基于时间戳的）UUID ==> 唯一字符串。
 */
const UUIDV1 = require('uuid/v1')
const UUIDV3 = require('uuid/v3')
const Util = require('../utils/index')
/**
 * 自定义配置
 */
const v1options = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab], // 自定义节点
  clockseq: 0x1234,// (Number between 0 - 0x3fff) RFC clock sequence. Default: An internally maintained clockseq is used.
}
class UuidService {

  // MY_NAMESPACE = 'zhanga'
  
  // 构造器
  // constructor () {
  //   Object.defineProperty(this, 'MY_NAMESPACE', {
  //       configurable: false,
  //       writable: false
  //   })
  // }
  /**
   * 生成主键id
   */
  generateId () {
    return Util.replaceStr(UUIDV1(v1options),'', '-')
  }
  generateKeyByName (name) {
    uuidv3('Hello, World!', MY_NAMESPACE)
  }
}
module.exports = new UuidService()
