// components/lgView/iconfont/index.js
Component({
  options:{
    multipleSlots:true,
    styleIsolation: 'apply-shared'
  },
  externalClasses:["lg-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type:String
    },
    size:{
      type:[String,Number],
      value:"25"
    },
    color:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
