const _ = getApp();
const systemInfoBehavior = require("../../behaviors/systemInfoBehavior.js");

Component({
  behaviors: [systemInfoBehavior],
  data: {
    entryList: [{
        title: "流程应用",
        entrys: [{
            url: "",
            isCustom: true,
            type: "icon-daiyue",
            color: "",
            // color: "#ff9c00",
            name: "待阅"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yiyue",
            color: "",
            // color: "#08b1c4",
            name: "已阅"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-daiban1",
            color: "",
            // color: "#f6686e",
            name: "待办"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yibanshixiang",
            color: "",
            // color: "#08b1c4",
            name: "已办"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yitijiao",
            color: "",
            // color: "#08b1c4",
            name: "已提交"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-qidongtiaojian",
            color: "",
            // color: "#2d8cf0",
            name: "已启动"
          }
        ]
      },
      {
        title: "日常办公",
        entrys: [{
            url: "/pages/urgency/urgency",
            type: "weiwangguanicon-defuben-",
            color: "#f6686e",
            name: "紧急应用"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-jinri",
            color: "",
            name: "今日值班"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-paiban",
            color: "",
            name: "我的值班"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-zhibanguanli",
            color: "",
            name: "值班管理"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-huiyi1",
            color: "",
            name: "会议看板"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yidongshenqing",
            color: "",
            name: "巨轮人事"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yidongshenqing",
            color: "",
            name: "中德人事"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yidongshenqing",
            color: "",
            name: "广州人事"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-daqia",
            color: "",
            name: "签到码"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-rizhi",
            color: "",
            name: "工作简报"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yijian",
            color: "",
            name: "建议/投稿"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-huiyi",
            color: "",
            name: "我的会议"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-shitangfuwu",
            color: "",
            name: "食堂看板"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-gonggao1-copy",
            color: "",
            name: "公告"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-cheliang",
            color: "",
            name: "公务用车"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-tongji",
            color: "",
            name: "客膳统计"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-baoxiuguanli",
            color: "",
            name: "报修管理"
          },
        ],
      },
      {
        title: "生产管理",
        entrys: [{
            url: "",
            isCustom: true,
            type: "icon-chache13",
            color: "",
            name: "叉车"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-che1",
            color: "",
            name: "紧急用车"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-cheliangxinxi",
            color: "",
            name: "公务车管理"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-huowu",
            color: "",
            name: "物料盘点"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-shenqing3",
            color: "",
            name: "物料申领"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-shenqing",
            color: "",
            name: "物料确认"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-renwulingqu",
            color: "",
            name: "维修任务"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-shenpi3",
            color: "",
            name: "报修审批"
          }
        ],
      },
      {
        title: "自助服务",
        entrys: [{
            url: "",
            isCustom: true,
            type: "icon-susheguanli1",
            color: "",
            name: "宿舍管理"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-shebei",
            color: "",
            name: "设备报修"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-baoxiu2",
            color: "",
            name: "宿舍申请"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-baoxiu2",
            color: "",
            name: "报修申请"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-iconwucan",
            color: "",
            name: "中德用餐"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-aixinjuanzeng",
            color: "",
            name: "爱心捐赠"
          },
          {
            url: "",
            isCustom: true,
            type: "iconfont icon-erweima1",
            color: "",
            name: "付款码"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-zu",
            color: "",
            name: "巨轮用餐"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-shouyin",
            color: "",
            name: "消费结算"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yongcanjiesuan",
            color: "",
            name: "食堂管理"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yongcanjiesuan",
            color: "",
            name: "用餐结算"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-chongzhi-copy",
            color: "",
            name: "我要充值"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-chuchawaichushenqingdan",
            color: "",
            name: "不一致单"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-chuchawaichushenqingdan",
            color: "",
            name: "外出申请"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-dengji",
            color: "",
            name: "出入登记"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-yongcanguanli",
            color: "",
            name: "用餐管理"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-fangkeyuyue",
            color: "",
            name: "我的访客"
          },
          {
            url: "",
            isCustom: true,
            type: "iconfont icon-yiwancheng1",
            color: "",
            name: "来访登记"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-menzhaguanli",
            color: "",
            name: "巨轮门闸"
          },
          {
            url: "",
            isCustom: true,
            type: " icon-menzhaguanli",
            color: "",
            name: "门闸管理"
          },
          {
            url: "",
            isCustom: true,
            type: "icon-renwulingqu",
            color: "",
            name: "考试"
          },
        ],
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
  methods:{
      init(){
        
        console.log(getCurrentPages());

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
              text: arrLength+""
            })

          }

        }).catch(() => {
  
        })
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