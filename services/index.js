/**
 * 统一导出请求接口
 */
module.exports = {
    ...require("./login"),
    ...require("./home"),
    ...require("./backlog"),
    ...require("./toread"),
    ...require("./emolument"),
}