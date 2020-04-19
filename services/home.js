const fly = require("../utils/httpRequest")


module.exports = {

  /* 
  author: longlong ,
  depict : 数据初始化 ,
  params:
  method:POST
 */
  init: function (params) {
    return fly.request('/init',
      params, {
        method: "post"
      }
    )
  },
  /* 
  author: longlong ,
  depict : 获取消息列表 ,
  params:
  method:POST
 */
  getMessageList: function (params) {
    return fly.request('/messageBox/pageList',
      params, {
        method: "post"
      }
    )
  }

}