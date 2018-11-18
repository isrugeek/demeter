// pages/summary/summary.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    'summary_list':[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    app.changeTabBar()
    var list = app.globalData['history']
    console.log(list[0])

    // console.log('nutrs!!:', list[0]['nutrs'][0]['val'])
    this.setData({
      'summary_list':list
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