/*
 * @Author: etf 
 * @Date: 2018-06-20 22:20:50 
 * @Last Modified by: etf
 * @Last Modified time: 2018-07-19 10:32:38
 * 格式化返回参数
 */
const ApiError = require('../error/ApiError')
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
    // 把else去掉的原因是如果不去掉 所有的带/api的请求都会有数据返回
  }/* else{
    ctx.body = {
        code: 0,
        message: 'success'
    }
  } */
}
//添加格式化处理响应结果的中间件，过滤指定前缀的接口名称，在添加路由之前调用
const url_filter = function(pattern) {
  return async function(ctx, next) {
    let reg = new RegExp(pattern)
    try {
      //先去执行路由
      await next()
    } catch (error) {
      // 如果异常类型 是API异常并且通过正则验证的url，将错误信息添加到响应体中返回。
      if(error instanceof ApiError && reg.test(ctx.originalUrl)){
        ctx.status = 200;
        ctx.body = {
            code: error.code,
            message: error.message
        }
      }
      // 抛出异常给日志捕获
      throw error
    }
    //通过正则的url进行格式化处理
    if(reg.test(ctx.originalUrl)){
        response_formatter(ctx, next)
    }
  }
}
module.exports = url_filter