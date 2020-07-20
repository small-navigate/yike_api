const User = require('../model/dbUser')
const {
  encryption,
  verification
} = require('./bcrypt')



// 注册用户
function registerUser(name, email, pass, res) {
  //密码加密
  console.log(name, email, pass);
  let password = encryption(pass)
  let data = {
    username: name,
    password: password,
    email: email,
    time: new Date()
  }
  let users = new User(data)

  console.log(1, users)
  users.save(function (err, result) {
    console.log(err)
    console.log(result)
    if (err) {
      res.json({
        message: {},
        meta: {
          msg: '注册失败',
          status: 500
        }
      })
    } else {
      res.json({
        message: {},
        meta: {
          msg: '注册成功',
          status: 200
        }
      })
    }
  })
}

// 匹配用户表元素个数
function conuntUserValue(data, type, res) {
  let wherestr = {
    type: data
  }
  User.countDocuments(wherestr, (err, result) => {
    if (err) {
      res.json({
        message: {},
        meta: {
          msg: '查找失败',
          status: 500
        }
      })
    } else {
      res.json({
        message: {
          result
        },
        meta: {
          msg: '该用户已存在',
          status: 200
        }
      })
    }
  })
}

module.exports = {
  registerUser,
  conuntUserValue
}