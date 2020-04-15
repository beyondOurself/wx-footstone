const systemInfoBehavior = require("../../behaviors/systemInfoBehavior.js");

Component({
  behaviors: [systemInfoBehavior],
  data: {
    processEntrys: [{
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "#2d8cf0",
        name: "待阅"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "#19be6b",
        name: "已阅"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "#ff9900",
        name: "待办"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "#ed3f14",
        name: "已办"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "",
        name: "已提交"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "",
        name: "已启动"
      }
    ],
    workEntrys: [{
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "#ed3f14",
        name: "紧急应用"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "green",
        name: "今日值班"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "",
        name: "紧急"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "",
        name: "紧急"
      },
      {
        url: "",
        type: "weiwangguanicon-defuben-",
        color: "",
        name: "紧急"
      },
    ],
  },
  methods: {
    isNavigateLogin() {
      wx.navigateTo({
        url: "../login/login"
      })
    },
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


  }


})