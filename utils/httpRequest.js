const {IS_MOCK} = require("../config/index")
const Fly = require("../lib/commonjs/wx");
const resMocks = require("../mock/index");
const fly = new Fly();
//定义公共headers
fly.config.headers = {
	'content-type': 'application/x-www-form-urlencoded'
}
//设置超时
fly.config.timeout = 10000;
//设置请求地址
fly.config.baseURL = "https://unidemo.dcloud.net.cn"; // 
// 添加请求拦截器
fly.interceptors.request.use((request) => {

		//mock
		if (IS_MOCK) {
			let mockRes = resMocks(request.url, request.body);
			if (mockRes.mockStatus) {
				return Promise.resolve(mockRes)
			}
		}
		return request
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	})

// 添加响应拦截器
fly.interceptors.response.use((res) => {


	// uni.hideLoading();
	// uni.hideToast();
	// // 对响应数据做些事
	// if (!res.data) {
	// 	return Promise.reject(res)
	// }
	return res
}, (error) => {
	// uni.hideLoading();
	// uni.hideToast();
	return Promise.reject(error)
})
module.exports = fly;