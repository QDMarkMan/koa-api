const Util = require('./index')
/**
 * 切换数据类型  camelJson  <=>  underlineJson
 * @param {*object} json 
 * @param {*string} type camelToUnderline / undelineToCamel  
 */
module.exports.switchJsonType = (json, type= "camelToUnderline") => {
  console.log(type)
  let newJson = {}
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      // 符合其中一项标准进行转义
      if (Util.isCamel(key) || Util.isUnderline(key)) {
        const newKey = Util[type](key)
        newJson[newKey] = json[key]
      } else {
        newJson[key] = json[key]
      }
    }
  }
  return newJson 
}