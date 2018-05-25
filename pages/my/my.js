//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loadingHidden: false //页面加载
  },
  onPullDownRefresh() {// 上拉刷新
    console.log('刷新!');
     //wx.showNavigationBarLoading() //在标题栏中显示加载
   // wx.hideNavigationBarLoading() //完成停止加载
  
  },
  onReachBottom: function () {// 下拉加载
    wx.showLoading({
      title: '努力加载中',
    })
    console.log('------->');
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  //事件处理函数
  bindViewTap: function () {
    console.log('点击事件');
    wx.scanCode({// 扫一扫
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  onLoad: function () {
    if (wx.getStorageSync('userName')){// 看本地存储有没有登陆
      console.log('登陆成功!');
    }else{
      console.log('没有登陆!');
      // wx.navigateTo({
      //   url: '../hello/hello'
      // })
    }






    this.setData({
      loadingHidden: true
    });



  },
  getUserInfo: function (e) {// 获取用户信息
    console.log(e);

  }
})
