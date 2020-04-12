const {
  users
} = require("./loginMock");
const {
  isInArr
} = require("../utils/common")
module.exports = function resMocks(reqUrl, params) {
  switch (reqUrl) {
    case "/login":
      let data = {
        mockStatus: true
      };
      let userInfo = isInArr(params, users);
      if (userInfo && userInfo.length > 0) {
        data.result = userInfo;
        data.msg = "登录成功!";
        data.code = 1;
      } else {
        data.msg = "登录失败!";
        data.code = -1;
      }
      return data;
      break;
    default: {
      return {
        mockStatus: false
      }
      break;
    }

  }
}