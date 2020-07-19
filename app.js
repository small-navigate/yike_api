const express = require('express')
const cors = require('cors')
const app = express()

// 跨域
app.use(cors())
app.get('/', (req, res) => {
  res.json({
    msg: 'hello world!'
  })
})
app.get('/api/test', (req, res) => {
  res.json({
    msg: 'hello world!'
  })
})



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
})
app.listen(3000, () => {
  console.log('程序运行在3000端口')
})