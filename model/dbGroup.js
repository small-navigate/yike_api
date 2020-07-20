const mongoose = require('mongoose')
const Schema = mongoose.Schema
//群表
const SchemaGroup = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //用户id
  name: String, //好友id
  imgurl: {
    type: String,
    default: 'group.png'
  }, //用户头像
  notice: String, //群公告
  time: Date, //发送时间
})

module.exports = SchemaGroup