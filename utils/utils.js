/*
 * @Author: etf 
 * @Date: 2018-07-20 12:39:19 
 * @Last Modified by: etf
 * @Last Modified time: 2018-07-20 13:32:05
 * 工具类
 */
/**
 * 检查对象的类型
 * @param {*目标} o 
 */
module.exports = function judgeObjType(o){
  return Object.prototype.toString.call(o).slice(8, -1)
}
/**
 * @param {*字符串} str 
 * @param {*要替换的字符串} targetStr
 * @param {*目标字符串}  sourceStr
 */
module.exports = function replaceStr(str = "", targetStr, sourceStr){
  if(judgeObjType(str) !== 'String'){
    throw new error('参数必须是字符串格式')
  }
  
  return str
}