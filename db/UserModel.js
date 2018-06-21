const sequelize = require('./index')
const Sequelize = require('sequelize')
/**
 * 定义模型
 */
const User = sequelize.define('user', {
  userName: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.STRING
  }
},
// 自动化时间戳
/* {
  timestamps: false
} */
)

// force: true 如果表已经存在，将会丢弃表
/* User.sync({force: true}).then(() => {
  // 表已创建
  return User.create({
    userName: 'mark',
    password: 'mark123456'
  })
}) */
/* User.create({  
  userId: 111111111,  
  userName: 'markadd',  
  password: '123456'
});   */
// 查询全部
/* User.findAll().then(user => {
  console.log(user)
}) */
//修改操作 1
var pram={'userName':'markupdate'}
/* User.update(  
  pram,{ 'where':{'id':1} }  
) */
// 修改操作2
/* (async () => {
  var p = await queryFromSomewhere();
  p.gender = true;
  p.updatedAt = Date.now();
  p.version ++;
  await p.save();
})(); */

// 删除操作
// user.destroy({'where':{'id':2}});//将表内id等于2的元组删除  

module.exports = User