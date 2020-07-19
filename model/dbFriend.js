const mongoose = require('mongoose')

//好友表
const SchemaFriend = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //用户id
  friendID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //好友id
  state: String, //好友状态（0已成为好友，1申请中，2申请发送方）
  time: Date //生成时间
})

module.exports = SchemaFriend