// components/lgView/nav/index.js
Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['lg-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    titleTxt: {
      type: String,
      value: "",

    },
    custom: {
      type: Boolean,
      value: false
    },
    border: {
      type: Boolean,
      value: false
    },
    neat: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    toolBar: 0,
    navBar: 0,
    titleBar: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setToolBar: function () {
      this.setData({
        toolBar: wx.getSystemInfoSync().statusBarHeight
      })
    },
    setTitleBar: function () {

      if (this.data.toolBar === 0 && !this.data.neat) {

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
    },
    setNeatTitleBar:function(){

      this.setData({
        titleBar: wx.getMenuButtonBoundingClientRect().top
      })

    },
    switchNavBar: function () {
      if (this.data.neat) {
        this.setData({
          toolBar:0
        })
      }
    }

  },
  lifetimes: {
    attached: function () {

      if(this.data.neat){       
        this.switchNavBar();
        this.setNeatTitleBar();
        return;
      }
      this.setToolBar();
      this.setTitleBar();
      this.setTotalBar();
      
    }
  }
})