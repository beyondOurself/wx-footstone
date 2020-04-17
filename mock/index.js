const {
  users
} = require("./loginMock");
const {
  listAllTodo
} = require("./backlogMock");
const {
  isInArr
} = require("../utils/common")
module.exports = function resMocks(reqUrl, params) {
  let data = {
    mockStatus: true
  }
  switch (reqUrl) {
    case "/login":
      let userInfo = isInArr(params, users);
      if (userInfo && userInfo.length > 0) {
        data.res = {
          result: userInfo,
          msg: "登录成功!",
          code: 1
        }
      } else {
        data.res = {
          msg: "登录失败!",
          code: -1
        }
      }
      break;
    case "/listAllTodo":
      data.res = listAllTodo;
      break;
    default: {
      break;
    }
  }

  return data;
}