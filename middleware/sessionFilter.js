/*
 * @Author: etongfu
 * @Date: 2018-07-04 20:05:08 
 * @Last Modified by: etongfu
 * @Last Modified time: 2018-11-02 10:50:07
 * session令牌过滤
 * ==> 通过session对当前登录用户的权限进行判断和处理
 */
const config =  require('../config')
// 中间件
let sessionFilter = function () {
  return async function (ctx, next) {
    const session = ctx.session
    const url = ctx.request.originalUrl // url
    const Method = ctx.request.method
    try {
      // get 请求处理当前的请求页面问题
      if (Method === 'GET') {
        // 有session就放行
        if (JSON.stringify(session) !== '{}') {
          // 存在session进行放行
          await next()
        } else {
          // 在放行白名单中 进行放行
          if (config.safe_filter_url.indexOf(url) === -1) {
            // 重定向
            return await ctx.redirect('/login')
          } else {
            console.log('page can not pass')
            // 存在白名单中进行正常跳转
            await next()
          } 
        }
      } else {
        await next()
      }
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = sessionFilter