const sequelize = require('../index')
const Sequelize = require('sequelize')
/**
 * user model
 */
const User = sequelize.define('team_users', {
    id: {
      field: 'id',
      type:  Sequelize.STRING(32), // id
      primaryKey: true
    },
    username: {
      field: 'username',
      type:  Sequelize.STRING(32), // 用户名
    },
    nickName:{
      field: 'nick_name',
      type:  Sequelize.STRING(32), // 昵称
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING(128)
    },
    regDate: {
      field: 'reg_date',
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
    // 地址
    address: {
      type: Sequelize.STRING(32)
    },
    gender: {
      type: Sequelize.ENUM('0', '1')
    }
  },
  // config 
  {
    comment: "team用户表",
    freezeTableName: true,
    timestamps: false
  }
)
const UserModel = {
  /**
   * 创建用户
   * @param {*} user 
   */
  async createUser (user) {
    await User.create(user).then(async () => {
      await User.findOrCreate({where: {id: user.id}}).spread((user, created) => {
          // 没有被创建过
          if (!created) {
            
          }
        })
      })
    return {
      code: 200,
      succeed: true,
      msg: '注册成功'
    }
  },
  /**
   * 根据手机号查找用户
   * @param {*} para 
   */
  async findUserByUserName (para) {

  },
  /**
   * 通过用户名和密码获取用户
   * @param {*} para 
   */
  async findUserByNameAndPass (para) {

  }
}

module.exports = UserModel