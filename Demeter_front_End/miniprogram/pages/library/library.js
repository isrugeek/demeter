// pages/library/library.js
Page({

  /**
   * Page initial data
   */
  data: {
    'nut_items':[
      {key:'Apple', val:'>'},
      { key: 'Banana', val: '>' },
      { key: 'Rice', val: '>' },
      { key: 'Noddle', val: '>' },
      { key: 'Pear', val: '>' },
      { key: 'Hamburger', val: '>' },
      { key: 'Pizza', val: '>' },
      { key: 'Spageti', val: '>' },
      { key: 'Salad', val: '>' },
      { key: 'Wheat Bread', val: '>' },
      { key: 'Tuna Sandwitch', val: '>' }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const app = getApp();
    app.changeTabBar();
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