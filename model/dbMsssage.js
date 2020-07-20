const mongoose = require('mongoose')
const Schema = mongoose.Schema
//一对一消息表
const SchemaMsssage = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //用户id
  friendID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //好友id
  message: String, //内容
  types: String, //内容类型（0文字，1图片链接，2音频链接）
  time: Date, //发送时间
  state: Number //接收状态(0以读，1未读)
})

module.exports = SchemaMsssage