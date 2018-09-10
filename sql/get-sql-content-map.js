/*
 * @Author: etf 
 * @Date: 2018-09-04 21:33:57 
 * @Last Modified by: etf
 * @Last Modified time: 2018-09-10 17:16:18
 * 获取sql脚本内容
*/
const fs = require('fs')
const getSqlMap = require('./get-sql-map')

let sqlContentMap  = {}

/**
 * 读取sql文件内容
 * @param {*string} filename  文件名
 * @param {*string} path      文件路径
 * @returns {string}
 */
function getSqlContent(filename, path) {
  let content = fs.readFileSync(path, 'binary')
  sqlContentMap[filename] = content
}

/**
 * 封装sql文件脚本内容
 * @returns {object}
 */
function getSqlContentMap () {
  let sqlMap = getSqlMap()

  for(let item in sqlMap) {
    getSqlContent(item, sqlMap[item])
  }  
  return sqlContentMap
}

module.exports = getSqlContentMap