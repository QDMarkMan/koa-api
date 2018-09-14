const sequelize = require('../index')
const Sequelize = require('sequelize')
/**
 * user model
 */
const UserModel = sequelize.define('team_users', {
    id: {
      type:  Sequelize.STRING(32), // id
    },
    username: {
      type:  Sequelize.STRING(32), // 用户名
    },
    nick_name:{
      type:  Sequelize.STRING(32), // 昵称
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING(32)
    },
    reg_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    email:{
      type: Sequelize.STRING(32)
    },
    phone: {
      type: Sequelize.STRING(32)
    },
    ip: {
      type: Sequelize.STRING(32)
    },
    gender: {
      type: Sequelize.ENUM()
    }
  },
  // config 
  {
    comment: "team用户表",
    freezeTableName: true,
    timestamps: false
  }
)
module.exports = UserModel