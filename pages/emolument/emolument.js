const _ = getApp();;
// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backlogList: [],
    loadingShow: false,
    isNoneShow: false,
    conTriggered: false,
    employeeSalaryDetailList: []
  },
  /**
   * 自定义方法
   */
  handleConRefresh: function () {
    //下拉加载数据 
    this.refresh();

  },
  refresh() {
    this.setData({
      conTriggered: true
    })
    _.$api.getEmployeeSalaryDetailList({}).then(({
      res
    }) => {

      if (res && res.code === 0) {
        let _employeeSalaryDetailList = res.employeeSalaryDetailList
        if (_employeeSalaryDetailList.length > 0) {

          for (const item of _employeeSalaryDetailList) {
            item.recordDate = item.recordDate.substr(0, 10)
          }

          this.setData({
            employeeSalaryDetailList: _employeeSalaryDetailList
          })
        }
      }

      this.setData({
        conTriggered: false
      })

    }).catch(() => {

      this.setData({
        conTriggered: false
      })
    })
  },

  /**
   * 页面生命周期
   */
  onShow() {

    this.refresh();
  }


})