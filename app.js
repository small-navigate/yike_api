const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var path = require('path')
const mount = require('mount-routes')
const app = express()
require('./config/db')

// 跨域
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

/**
 *
 * 初始化路由
 *
 */
// 带路径的用法并且可以打印出路有表
mount(app, path.join(process.cwd(), '/routes'), true)

// 404页面
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})
// 出现错误处理
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
  next()
})


app.listen(3000, () => {
  console.log('程序运行在3000端口')
})