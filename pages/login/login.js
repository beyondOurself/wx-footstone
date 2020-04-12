const _ = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    browse: "browse",
    delete: "delete",
    browseColor: "#80848f",
    deleteColor: "#80848f",
   
  },
  /**
   * 自定义方法
   */
  handleClick() {
    console.log("点击了~")
  },
  switchBrowseType() {

    let browse_ = this.data.browse;

    if (browse_ == "browse") {
      this.setData({
        browse: "browse_fill",
        browseColor:"#007AFF"
      })
    } else {
      this.setData({
        browse: "browse",
        browseColor:"#80848f"
      })
    }

  },
  switchDeleteType() {

    let delete_ = this.data.delete;

    if (delete_ == "delete") {
      this.setData({
        delete: "delete_fill",
        deleteColor:"#007AFF"
      })
    } else {
      this.setData({
        delete: "delete",
        deleteColor:"#80848f"
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    _.$api.login({
      username: "1801018",
      password: "tea144#"
    }).then((d) => {
      console.log(d)
    }).catch(() => {})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})