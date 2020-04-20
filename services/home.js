const fly = require("../utils/httpRequest")


module.exports = {

  /* 
  author: longlong ,
  depict : 获取模块入口 ,
  params:
  method:POST
 */
  getEntyList: function (params) {
    return fly.request('/entryList',
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