Component({

  methods:{
    isNavigateLogin(){
      wx.navigateTo({
        url:"../login/login"
      })
    }
  },
  pageLifetimes: {
     
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }

  },
  
})
