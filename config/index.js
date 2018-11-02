const confman = require('confman')
// 运行环境
const mode = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
const configPath = `${__dirname}/config.${mode}`
// 解析文件
const config = confman.load(configPath)
module.exports = config
