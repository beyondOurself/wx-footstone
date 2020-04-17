const fly = require("../utils/httpRequest")


module.exports = {

  /* 
  author: longlong ,
  depict : 用户登录 ,
  params:{ username,password,uuid,clientId,version}
  method:POST
 */
  listAllTodo: function (params) {
    return fly.request('/listAllTodo',
      params, {
        method: "post"
      }
    )
  }

}