const _ = getApp();
const systemInfoBehavior = require("../../behaviors/systemInfoBehavior.js");
const {
  $Toast
} = require("../../components/lgView/base/index")
Component({
  behaviors: [systemInfoBehavior],
  data: {
    entryList: [],
    messageNewestItem: {
      title: "暂无最想消息",
      content: ""
    }

  },
  methods: {
    isNavigateLogin() {
      wx.navigateTo({
        url: "../login/login"
      })
    },
  },
  methods: {
    init() {
      // 获取模块入口列表
      _.$api.getEntyList({}).then(({
        res
      }) => {

        if (res && res.length > 0) {

          let _entryList = res;

          this.setData({
            entryList: _entryList
          })
        }

      }).catch((e) => {
        console.error(e)
      });

      // 初始化待办的BarBadge
      _.$api.listAllTodo({}).then(({
        res
      }) => {

        if (res && res.code === 0) {


          let _meetingList = res.meetingList;
          let _taskList = res.taskList;
          let _workflowTaskList = res.workflowTaskList;
          let arr = [..._meetingList, ..._taskList, ..._workflowTaskList];
          let arrLength = arr.length;

          wx.setTabBarBadge({
            index: 2,
            text: arrLength + ""
          })

        }

      }).catch(() => {

      })
      //初始化消息 
      _.$api.getMessageList({}).then(({
        res
      }) => {
        if (res.code === 0 && res.messageBoxList) {
          let messageList = res.messageBoxList.list;
          if (messageList.length > 0) {
            let _messageNewestItem = messageList[0];
            this.setData({
              messageNewestItem: _messageNewestItem
            })
          }
        }
      }).catch(() => {


      })
    },
    handleEntryNavigator(e) {
      let _isOpen = e.detail.isOpen;
      if (!_isOpen) {
        $Toast({
          content: '没有相关权限!',
          type: "warning"
        });
      }

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

    //预加载tab的相关数据
    this.init();

  }


})