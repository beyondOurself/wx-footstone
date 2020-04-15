const systemInfoBehavior = require("../../behaviors/systemInfoBehavior.js");

Component({
  behaviors: [systemInfoBehavior],
  methods: {
    isNavigateLogin() {
      wx.navigateTo({
        url: "../login/login"
      })
    },
    test:function(){
      //  console.log("触发了~")
    },
    test2:function(){
       console.log("下面触发了~")
    },
    test3:function(){
       console.log("上面触发了~")
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
  
  attached: function () {
    

  }


})