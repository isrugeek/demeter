// pages/me/me.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    loading: false,
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    var that = this
    app.changeTabBar()
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo,
      })
    });
    wx.showModal({
      title: 'Information',
      content: 'We are getting Basic your Information ',
      confirmText: "Ok",
      showCancel: false,
      success: function (res) {
        console.log('success')
      }
    })
  },
  bindFmlSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    })
    wx.showToast({
      title: 'Saving...',
      icon: 'loading',
      duration: 1500
    })
  }

 
})