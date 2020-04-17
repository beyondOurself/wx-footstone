const componentBehavior =  require("../../../behaviors/componentBehavior");
Component({
  options:{
    styleIsolation:"apply-shared"
  },
  behaviors:[componentBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor:{
      type:String
    },
    iconType:{
      type:String
    },
    iconCustom:{
      type:String
    },
    iconSize:{
      type:[String,Number],
      value:20
    },
    taskName:{
      type:String
    },
    taskStateText:{
      type:String
    },
    assignTo:{
      type:String
    },
    time:{
      type:String
    },
    originType:{
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
