const componentBehavior =  require("../../../behaviors/componentBehavior");
Component({
  behaviors:[componentBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"title"
    },
    size:{
      type:[String,Number],
      value:25
    },
    url:{
      type:String
    },
    type:{
      type:String
    },
    color:{
      type:String
    },
    entryList:{
      type:Array
    },
    order:{
      type:[String,Number]
    },
    customIcon:{
      type:String,
      value:"iconfont"
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
