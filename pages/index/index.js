//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loadingHidden: false //页面加载
  },
  onShareAppMessage: function () {// 分享
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    console.log('点击事件');
    wx.scanCode({// 扫一扫
      success: (res) => {
        console.log(res)
      },
      fail:(res)=>{
        console.log(res);
      }
    })
  },
  onLoad: function () {
    this.setData({
      loadingHidden: true
    })
  


  },
  getUserInfo: function(e) {// 获取用户信息
    console.log(e);
    
  }
})
