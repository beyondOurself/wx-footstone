const fly = require("../utils/httpRequest")


module.exports = {

  /* 
  author: longlong ,
  depict : 待阅列表 ,
  params:
  method:POST
 */
  listAllToread: function (params) {
    return fly.request('/listAllToread',
      params, {
        method: "post"
      }
    )
  }

}