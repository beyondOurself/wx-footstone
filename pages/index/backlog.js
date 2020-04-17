const _ = getApp();
const moment = require("../../lib/commonjs/moment");
Component({

  data:{
    backlogList:[],
    loadingShow:false,
    isNoneShow:false
  },
  pageLifetimes: {


    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  },
  attached() {
    this.setData({
      loadingShow:true
    })
    _.$api.listAllTodo({}).then(({
      res
    }) => {


      if (res && res.code === 0) {

        
        let _meetingList = res.meetingList;
        let _taskList = res.taskList;
        let _workflowTaskList = res.workflowTaskList;
        
       if(_meetingList.length === 0 && _taskList.length === 0 && _workflowTaskList.length === 0){
           
          this.setData({
            isNoneShow:true
          })
          return; 
       }  

        for (const item of _meetingList) {
            item.originType = "发起人";
            item.iconType = "icon-huiyidengji";
            item.startDate = moment(item.startDate).format("YYYY-MM-DD");
        }
        for (const item of _taskList) {
            item.originType = "优先级";
            item.iconType = "icon-renwu3";
            item.gmtCreate = moment(item.gmtCreate).format("YYYY-MM-DD");

        }
        for (const item of _workflowTaskList) {
            item.originType = "申请人";
            item.iconType = "icon-jisuanjixitong1";
            item.startTime = moment(item.startTime).format("YYYY-MM-DD");
        }


        let arr = [..._meetingList, ..._taskList, ..._workflowTaskList];
        let arrLength = arr.length;

        wx.setTabBarBadge({
          index: 2,
          text: arrLength+""
        })

      
        for (const item of arr) {
          item.color = ["#4DA2FF", "#36BAD3", "#7DC45A", "#FEB05D"][Math.floor(Math.random() * 4)];
        }

        this.setData({
          backlogList:arr
        })

        this.setData({
          loadingShow:false
        })
      }

    }).catch(() => {

      this.setData({
        loadingShow:true
      })
    })
   
  }



})