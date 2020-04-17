Component({
  data: {
    employeeInfos: {},
    modalVisible: false
  },
  methods: {
    logout: function () {
      this.setData({
        modalVisible: true
      })
    },
    handleOk: function () {
      this.setData({
        modalVisible: false
      })
      wx.removeStorageSync('userInfo');
      wx.reLaunch({
        url: '/pages/login/login',
      })
    },
    handleCancel: function () {
      this.setData({
        modalVisible: false
      })
    }

  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
    }

  },
  attached() {

    let _userInfo = wx.getStorageSync('userInfo');
    if (_userInfo) {
      this.setData({
        employeeInfos: _userInfo
      })
    }
  }
})