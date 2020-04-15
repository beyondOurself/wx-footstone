const _ = getApp();
const {
  $Message
} = require('../../components/lgView/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {

    browse: "browse",
    browseColor: "#80848f",
    is: true,
    loadingShow: false,

    username: "",
    password: ""

  },
  /**
   * 自定义方法
   */
  switchBrowseType() {

    let browse_ = this.data.browse;

    if (browse_ == "browse") {
      this.setData({
        browse: "browse_fill",
        browseColor: "#2d8cf0",
        is: false
      })
    } else {
      this.setData({
        browse: "browse",
        browseColor: "#80848f",
        is: true
      })
    }

  },
  handleDelete() {
    this.setData({
      username: ""
    })
  },
  handleLogin() {

    this.setData({
      loadingShow: true
    })
    _.$api.login({
      username: this.data.username,
      password: this.data.password
    }).then((res) => {

      if (res && res.code == 1) {

        let users = res.result;

        //保存用户对象
        if (users.length > 0) {

          try {
            wx.setStorageSync('userInfo', users[0]); //跳转到 home 页面

            wx.switchTab({
              url: '/pages/index/home'
            })
          } catch (error) {
            $Message({
              content: '保存用户信息失败,重新进入!',
              type: 'error'
            })
          }
        }
      } else {
        $Message({
          content: res.msg,
          type: 'error'
        })
      }
      //关闭加载框
      this.setData({
        loadingShow: false
      })
    }).catch(() => {

      this.setData({
        loadingShow: false
      })
    })
  }
})