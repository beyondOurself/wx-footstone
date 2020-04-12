const fly = require("../lib/commonjs/wx")


module.exports = {

  /* 
  author: longlong ,
  depict : 用户登录 ,
  params:{ username,password,uuid,clientId,version}
  method:POST
 */
  home: function (params) {
    return fly.request('/login',
      params, {
        method: "post"
      }
    )
  }

}