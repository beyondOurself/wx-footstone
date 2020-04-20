const fly = require("../utils/httpRequest")


module.exports = {

  /* 
  author: longlong ,
  depict : 获取薪资列表 ,
  params:
  method:POST
 */
  getEmployeeSalaryDetailList: function (params) {
    return fly.request('/employeeSalaryDetailList/year',
      params, {
        method: "post"
      }
    )
  }

}