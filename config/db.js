const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/yike', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('数据库yike链接成功!!!'))


module.exports = db