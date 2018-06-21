/**
 * API 异常捕获
 */
const ApiErrorNames = require('./ApiErrorNames')
/**
 * Api error类
 */
class ApiError extends Error{
  constructor(error_name, error_code, error_message){
    super()
    let error_info = ApiErrorNames.getErrorInfo(error_name)

    this.name = error_name
    this.code = error_code
    this.message = error_message
  }
}
module.exports = ApiError