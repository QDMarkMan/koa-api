/*
 * @Author: mark
 * @Date: 2018-07-04 20:05:08 
 * @Last Modified by: etf
 * @Last Modified time: 2018-07-18 22:35:32
 * session 持久化
 */
const session = require('koa-session')
let sessionStore = {
  storage:{

  },
  /**
   * set session
   * @param {*} key 
   * @param {*} sess 
   * @param {*} maxAge 
   */
  set (key, sess, maxAge){
    return this.storage[key] = sess
  },
  /**
   * get session
   * @param {*} key 
   * @param {*} maxAge 
   */
  get(key, maxAge) {
    return this.storage[key]
  },
  /**
   * delete session
   * @param {*} key 
   */
  destroy (key) {
    delete this.storage[key]
  }
}