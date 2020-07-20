//引用发送邮件插件
const nodemailer = require('nodemailer')
const credential = require('../config/credential')
//创建传输方式
const transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: credential.qq.user,
    pass: credential.qq.pass
  }
})

// 注册发送邮件给用户
function emailLogin(email, res) {
  //发送信息
  const options = {
    from: '1123038371@qq.com',
    to: email,
    subject: '感谢您在yike注册',
    html: '<span>yike欢迎您的加入</span><a href="www.baidu.com">点击</a>'
  }
  //发送邮件
  transporter.sendMail(options, (err, msg) => {
    console.log('object');
    if (err) {
      console.log(err)
    } else {
      console.log(msg)
    }
  })
}

module.exports = {
  emailLogin
}