/**
 * 为了让自定义Api异常能够更好的使用，我们创建一个ApiErrorNames.js文件来封装API异常信息，并可以通过API错误名称获取异常信息。
 * 
 */
let ApiErrorNames = {}
ApiErrorNames.UNKNOW_ERROR = "unknowError"
ApiErrorNames.USER_NOT_EXIST = "userNotExist"
// 错误对应响应的名称
const error_map = new Map()
error_map.set(ApiErrorNames.UNKNOW_ERROR, {
  code: -1,
  message: '未知错误'
})
error_map.set(ApiErrorNames.USER_NOT_EXIST, {
  code: 101,
  message: '用户不存在'
})
//根据错误名称获取错误信息
ApiErrorNames.getErrorInfo = (error_name) => {
let error_info
  if (error_name) {
    error_info = error_map.get(error_name);
  }
  //如果没有对应的错误信息，默认'未知错误'
  if (!error_info) {
    error_name = UNKNOW_ERROR;
    error_info = error_map.get(error_name);
  }
  return error_info;
}

module.exports = ApiErrorNames;
