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
     messageList: []
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
     _.$api.getMessageList({}).then(({
       res
     }) => {
       if (res.code === 0 && res.messageBoxList) {

         let messageList = res.messageBoxList.list;
         if (messageList.length > 0) {
           this.setData({
             messageList
           })
         } else {

          this.setData({isNoneShow : true})
         };

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