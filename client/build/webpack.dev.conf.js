const path = require('path')
const resloveDir = file => path.join(__dirname, '..', file)
module.exports = {
  mode: 'production',
  entry: {
    app: resloveDir('/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: resloveDir('/dist')
  }
}