/*
 * @Author: etf 
 * @Date: 2018-09-04 21:38:19 
 * @Last Modified by: etf
 * @Last Modified time: 2018-09-10 17:16:19
 * 遍历目录操作
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
    let keyName = item + ''
    if (mime === itemMime) {
      fileList[item] = path + item
    }
  }
  return fileList
}
module.exports =walkFile
