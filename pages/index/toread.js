const _ = getApp();
const moment = require("../../lib/commonjs/moment");
const {
  $Toast
} = require('../../components/lgView/base/index');
Component({

  data: {
    backlogList: [],
    loadingShow: false,
    isNoneShow: false,
    conTriggered: false
  },
  methods: {
    handleConRefresh() {
      //下拉加载数据 
      this.refresh();

    },
    handleNavigator() {
      $Toast({
        content: '功能善未开通!',
        type: 'warning'
      });
    },
    refresh() {
      this.setData({
        conTriggered: true
      })
      _.$api.listAllToread({}).then(({
        res
      }) => {

        if (res && res.code === 0) {


          let _meetingList = res.meetingList;
          let _taskList = res.taskList;
          let _workflowTaskList = res.workflowTaskList;

          if (_meetingList.length === 0 && _taskList.length === 0 && _workflowTaskList.length === 0) {
           
            this.setData({
              isNoneShow: true
            })
          }else{


          }

          this.setData({
            conTriggered: false
          })

        }

      }).catch(() => {

        this.setData({
          conTriggered: false,
          isNoneShow: true
        })
      })
    }
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  attached() {

    //初始化数据
    this.refresh();

  }



})