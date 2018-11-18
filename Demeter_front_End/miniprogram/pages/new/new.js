// pages/new/new.js
const AV = require('../../utils/av-weapp-min.js');
const FML = require('../../model/fml.js');

var app = getApp()
Page({
  data: {
    loading: false,
    userInfo: {}
  },
  // Retrieve user info
  onLoad: function () {
    var that = this
    getApp().getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo,
      })
    });
    wx.showModal({
      title: 'Information',
      content: 'Providing the correct data is always Safe for your Health and Our AI will get to know more about you! ',
      confirmText: "Ok",
      showCancel: false,
      success: function (res) {        
        console.log('success')
      }
    })
  },
  // New FML Submission
  bindFmlSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    })
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    })
    var nickName = e.detail.value.nickName
    var quote = e.detail.value.quote
    console.log(e)

    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);

    setTimeout(function () {
      new FML({
        name: nickName,
        quote: quote,
        upvote: 0
      }).setACL(acl).save().catch(console.error);
      wx.reLaunch({
        url: '/pages/index/index?FML=1'
      });
    }, 2000);
    console.log(FML)
  }
})



