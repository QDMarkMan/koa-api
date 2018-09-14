const sequelize = require('../index')
const Sequelize = require('sequelize')

const AccountModel = sequelize.define('team_account', {
    account_id: { // id
      type: Sequelize.STRING(50)
    }
  },
  // config 
  {
    freezeTableName: true,
    timestamps: false
  }
)

module.exports = AccountModel