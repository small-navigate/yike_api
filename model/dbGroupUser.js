const mongoose = require('mongoose')

//群成员表
const SchemaGroupUser = new Schema({
  GroupID: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }, //群id
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //用户id
  name: String, //群内名称id
  tip: Number, //未读消息数
  shield: String, //是否屏蔽 0不屏蔽 1屏蔽
  time: Date, //加入时间
})

module.exports = SchemaGroupUser