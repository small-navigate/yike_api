const express = require('express')
const router = express.Router()
const {
  registerUser,
  conuntUserValue
} = require('../dao/userServer')


//判断用户或者邮箱是否存在
router.post('/conunt', (req, res) => {
  let data = req.body.data
  let type = req.body.type
  console.log('object');
  conuntUserValue(data, type, res)
})

//注册
router.post('/register', (req, res) => {
  let name = req.body.username
  let email = req.body.email
  let password = req.body.password
  console.log(req.body);
  registerUser(name, email, password, res)
})

module.exports = router