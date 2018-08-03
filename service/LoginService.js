/**
 * 用户登录service
 */
const SessionModal = require('../db/SessionModal')

module.exports = async function GetSession (data){
  return new Promise((resolve, reject) => {
    resolve(SessionModal.GetSeeionById(data))
  })
}