/**
 * 自动扫描输出Model
 */
const fs = require('fs')
const path = require('path')
let files = fs.readdirSync(path.resolve(__dirname + '/models'))
let models = files.filter(item => {
  return item.endsWith('.js')
}) 
module.exports = {}
for (let key of models) {
  let moduleName = key.substring(0, key.length -3)
  module.exports[moduleName] = require(path.resolve(__dirname + '/models/' + key))
}
