const _ = getApp();
const QRCode = require("../../utils/weapp-qrcode");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingShow: false,
  },
  /**
   * 自定义方法
   */
  handleScanCode() {

    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode'],
      success: (res) => {
        console.log("success",res)
      },
      fail: (res) => {
        console.log("fail"+res)
      },
      complete: (res) => {},
    })
  },
  /**
   * 页面生命周期
   */
  onShow() {
    let _username = wx.getStorageSync('userInfo').username;
    new QRCode('myQrcode', {
      text: _username || "none",
      width: 200,
      height: 200,
      padding: 12, // 生成二维码四周自动留边宽度，不传入默认为0
      correctLevel: QRCode.CorrectLevel.L, // 二维码可辨识度
      callback: (res) => {
        console.log(res.path)
        // 接下来就可以直接调用微信小程序的api保存到本地或者将这张二维码直接画在海报上面去，看各自需求
      }
    })
  }


})