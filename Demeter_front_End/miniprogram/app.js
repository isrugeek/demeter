//app.js
const AV = require('./utils/av-weapp-min.js')
AV.init({
  appId: 'hrajfoAICHW4XeYV4sERu6iv-gzGzoHsz',
  appKey: 'xAqG3XqAcdRNpLrGf5uFnbaU',
});

App({
  onLaunch: function () {
    // 打开调试
    wx.setEnableDebug({
      enableDebug: true
    })
    this.globalData = {
      'history':[],
      'tmp_img':'',
      userInfo:null
    }
  },
  // Get user inforamation 
  getUserInfo: function (cb) {
    console.log("test2");
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      // Call login
      wx.login({
        success: function () {
          console.log("success");
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            },
            fail: function (e) {
              console.log(e)
            }
          })
        }
      })
    }
  },
  openCamera: function (e) {
    var _this = this;
    this.setData({
      'reco_result': ''
    })
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        var filep = res.tempFilePaths[0]
        // _this.upload(filep)
        wx.navigateTo({
          url: '../cut/cut?img_path=' + filep,
        })
      }
    })
  },
  data: {
    servsers: "https://www.sudosofth5.xyz"
  },
  tabbar: {
    color: "#919191",
    selectedColor: "#919191",
    backgroundColor: "#ffffff",
    borderStyle: "#d7d7d7",
    list: [
      {
        pagePath: "/pages/summary/summary",
        text: "Demeter",
        iconPath: "../../images/demeter.png",
        selectedIconPath: "../../images/demeter2.png",
        selected: true
      },
      {
        pagePath: "/pages/library/library",
        text: "Library",
        iconPath: "../../images/foodlibrary.png",
        selectedIconPath: "../../images/foodlibrary2.png",
        selected: false
      },
      {
        pagePath: "/pages/helloworld/helloworld",
        text: "",
        iconPath: "../../images/camera.png",
        selectedIconPath: "../../images/camera.png",
        selected: false
      },
      {
        pagePath: "/pages/index/index",
        text: "Discover",
        iconPath: "../../images/discover.png",
        selectedIconPath: "../../images/discover2.png",
        selected: false
      },
      {
        pagePath: "/pages/me/me",
        text: "Me",
        iconPath: "../../images/me.png",
        selectedIconPath: "../../images/me2.png",
        selected: false
      }, 
    ],
    position: "bottom"
  },
  changeTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.tabbar;
    for (var i = 0; i < tabBar.list.length; i++) {
      console.log(_pagePath + '--' + tabBar.list[i].pagePath)
      tabBar.list[i].selected = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].selected = true;//根据页面地址设置当前页面状态  
      }
    }
    _curPage.setData({
      tabbar: tabBar
    });
  }
})
