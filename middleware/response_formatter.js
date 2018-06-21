/*
 * @Author: etf 
 * @Date: 2018-06-20 22:20:50 
 * @Last Modified by: etf
 * @Last Modified time: 2018-06-21 15:44:49
 * 格式换返回参数
 */
/**
 * 在app.use(router)之前调用
 * @param {*} ctx 
 * @param {*} next 
 */
const response_formatter = async (ctx, next) => {
  // 首先执行路由
  // 如果有返回数据  把返回数据添加到data中
  if(ctx.body){
    ctx.body = {
      code: 0,
      message: 'success',
      data: ctx.body
    }
  }else{
    ctx.body = {
        code: 0,
        message: 'success'
    }
  }
}
//添加格式化处理响应结果的中间件，过滤指定前缀的接口名称，在添加路由之前调用
const url_filter = function(pattern) {
  return async function(ctx, next) {
    let reg = new RegExp(pattern)
    //先去执行路由
    await next()
    //通过正则的url进行格式化处理
    if(reg.test(ctx.originalUrl)){
        response_formatter(ctx, next)
    }
  }
}
module.exports = url_filter