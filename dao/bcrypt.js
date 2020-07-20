const bcrypt = require('bcryptjs')

//加密
function encryption(e) {
  // 生成随机salt
  let salt = bcrypt.genSaltSync(10)

  //生成hash密码
  let hash = bcrypt.hashSync(e, salt)
  return hash
}

function verification(e, hash) {
  let verif = bcrypt.compareSync(e, hash)

  return verif
}

module.exports = {
  encryption,
  verification
}