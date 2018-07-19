/*
 * @Author: mark
 * @Date: 2018-07-04 20:05:08 
 * @Last Modified by: etf
 * @Last Modified time: 2018-07-19 14:12:40
 * session 持久化
 */
const config =  require('../config')
console.log(config)
let sessionFilter = function (ctx) {
  const url = ctx.originalUrl
  if (config.session_filter_url.indexOf(url) !== -1) {
    console.log('page pass')
  } else {
    console.log('page can not pass')
  }
}