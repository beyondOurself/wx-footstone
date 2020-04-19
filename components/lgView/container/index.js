const systemInfoBehavior = require("../../../behaviors/systemInfoBehavior");

Component({
  options: {
    multipleSlots: true
  },
  behaviors: [systemInfoBehavior],
  externalClasses: ['lg-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    uppder: { //距顶部/左边多远时，触发 scrolltoupper 事件
      type: [Number, String]
    },
    lower: { //	距底部/右边多远时，触发 scrolltolower 事件
      type: [Number, String]
    },
    triggered:{
      type:Boolean
    },
    enabled:{
      type:Boolean
    }
  },
  lifetimes:{
     attached(){
      
     }
  }, 
  /**
   * 组件的方法列表
   */
  methods: {
    // 滚动时候触发
    handleScroll: function () {
      this.triggerEvent('scroll')
    },
    // 滚动到底部触发
    handleScrollTolower: function () {
      this.triggerEvent('scrolltoblower')
    },
    // 滚动到顶部触发
    handleScrollToupper: function () {
      this.triggerEvent('scrolltoupper')
    },
    // 自定义下拉刷新被下拉
    handleFresherpulling: function () {
       this.triggerEvent('onpulling');
    },
    // 自定义下拉刷新被触发
    handleRefresherrefresh: function () {
       this.triggerEvent('onrefresh');
    },
    // 自定义下拉刷新被复位
    handleRefresherrestore: function () {
       this.triggerEvent('onrestore');

    },
    // 自定义下拉刷新被中止
    handleRefresherabort: function () {
       this.triggerEvent('onabort');

    },
  }
})