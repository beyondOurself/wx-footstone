const fly = require("../utils/httpRequest")


module.exports = {

  /* 
  author: longlong ,
  depict : 用户登录 ,
  params:{ username,password,uuid,clientId,version}
  method:POST
 */
  login: function (params) {
    return fly.request('/login',
      params, {
        method: "post"
      }
    )
  }

}