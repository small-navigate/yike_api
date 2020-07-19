const dbmodel = require('../model/dbmodel')
const User = dbmodel.model('User')

exports.findUser = function (res) {
  User.find()
}