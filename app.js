const  $api =  require("./services/index")

App({

  

  onLaunch: function () {



    //如果已经存储了用户的信息就不用在登录了
    if (wx.getStorageSync('userInfo')) {
      wx.switchTab({
        url: 'pages/index/home',
      })
    }

  }, 
  $api
})