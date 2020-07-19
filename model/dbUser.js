const mongoose = require('mongoose')

// 用户表
const SchemaUser = new Schema({
  username: String, //用户名
  password: String, //密码
  email: String, //邮箱
  sex: {
    type: String,
    default: 'asexual'
  }, //性别
  birth: Date, //生日
  phone: Number, //电话
  explain: String, //介绍
  imgurl: {
    type: String,
    default: 'user.png'
  }, //用户头像
  time: Date, //用户头像
})


module.exports = SchemaUser