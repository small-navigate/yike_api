const mongoose = require('mongoose')

//群消息表
const SchemaGroupMsg = new Schema({
  GroupID: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }, //群id
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //用户id
  message: String, //群消息id
  types: String, //内容类型（0文字，1图片链接，2音频链接）
  time: Date, //发送时间
})

module.exports = SchemaGroupMsg