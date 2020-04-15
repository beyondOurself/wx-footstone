module.exports = Behavior({
  data: {
    toolBar: 0,
    navBar: 0,
    titleBar: 0,
  },
  methods: {
    setToolBar: function () {
      this.setData({
        toolBar: wx.getSystemInfoSync().statusBarHeight
      })
    },
    setTitleBar: function () {

      if (this.data.toolBar === 0 ) {

        console.error("获取工具栏高度为 0 !");
        return;
      }

      const IOS_GAP = 6,
        ANDROID_GAP = 8;

      let customHeight = wx.getMenuButtonBoundingClientRect().height,
        sysInfo = wx.getSystemInfoSync();


      if (sysInfo.system.includes("iOS")) {
        this.setData({
          titleBar: customHeight + IOS_GAP * 2
        })
      } else {
        this.setData({
          titleBar: customHeight + ANDROID_GAP * 2
        })
      }
    },
    setTotalBar: function () {

      if (this.data.toolBar === 0 && this.data.titleBar === 0) {

        console.error("获取标题栏高度为 0 !");
        return;
      }

      this.setData({
        navBar: this.data.toolBar + this.data.titleBar
      })
    }
  },
  attached:function(){
     this.setToolBar();
     this.setTitleBar();
     this.setTotalBar();
  }
})