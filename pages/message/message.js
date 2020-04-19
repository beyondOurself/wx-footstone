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
    conTriggered: false
  },
  /**
   * 自定义方法
   */
  handleConRefresh:function() {
    //下拉加载数据 
    this.refresh();

 }, 
 refresh(){
   this.setData({
     conTriggered: true
   })
   _.$api.getMessageList({}).then(({
     res
   }) => {
    console.log(res.messageBoxList)

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
  onShow(){

    

    this.refresh();
    
    // _.$api.getMessageList().then(({res}) => { 

    //   console.log(res)
    // }).catch((err) => { console.log(err) });

  }
  
  
})