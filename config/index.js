const confman = require('confman')
// 运行环境
const mode = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
// 解析文件
const config = confman.load(`${__dirname}/config`)
module.exports = config
