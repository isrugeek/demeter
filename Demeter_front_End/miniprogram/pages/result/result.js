// pages/result/result.js

var app = getApp()
var var_results='';
Page({

  /**
   * Page initial data
   */
  data: {
    'nut_items': []
  },
  add:function(e){
    console.log('aadd')
    var_results['img_src'] = app.globalData['tmp_img']
    app.globalData['history'].unshift(var_results)
    wx.navigateTo({
      url: '../summary/summary',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var results = options.result
    var results = JSON.parse(results)
    var_results = results;
    console.log(results)
    this.setData({
      'name':results['name'],
      'nut_items':results['nutrs'],
      'img_src':getApp().globalData['tmp_img']
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})