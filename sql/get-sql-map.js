/*
 * @Author: etf 
 * @Date: 2018-09-04 21:35:13 
 * @Last Modified by: etf
 * @Last Modified time: 2018-09-10 17:28:11
 * 获取sql目录详情
 */
const fs = require('fs')
/**
 * 遍历目录下的文件目录
 * @param {*string} path 需要遍历的目录文件夹 
 * @param {*string} mime 遍历文件的后缀名
 * @returns {object} 
 */
const walkFile = function (path, mime){
  const files = fs.readdirSync(path)
  let fileList = {}
  for (const [i, item] of files.entries()) {
    let itemArr = item.split('\.')
    let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : 'undefined'
    if (mime === itemMime) {
      fileList[item] = path + item
    }
  }
  return fileList
}
/**
 * 获取sql目录下的文件目录数据
 */
const getSqlMap = function() {
  let basePath = __dirname
  console.log(basePath)
  basePath = basePath.replace(/\\/g, '\/')
  let pathArr = basePath.split('\/')
  pathArr = pathArr.splice(0, pathArr.length -1)
  basePath = `${pathArr.join('/')}/sql/sql_file/`
  let fileList = walkFile( basePath, 'sql' )
  return fileList
}
module.exports = getSqlMap