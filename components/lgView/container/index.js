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
    uppder:{//距顶部/左边多远时，触发 scrolltoupper 事件
      type:[Number,String]
    },
    lower:{ //	距底部/右边多远时，触发 scrolltolower 事件
      type:[Number,String]
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleScroll:function(){
      this.triggerEvent('scroll')
    },
    handleScrollTolower:function(){
      this.triggerEvent('scrolltoblower')
    },
    handleScrollToupper:function(){
      this.triggerEvent('scrolltoupper')
    }
  }
})
