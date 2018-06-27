//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "/image/swiper_01.jpg",
      "/image/swiper_02.jpg",
      "/image/swiper_03.jpg"
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        logo: '/image/swiper_01.jpg',
        title: '双人房',
        desc:'￥599'
      },
      {
        logo: '/image/swiper_02.jpg',
        title: '单人房',
        desc: '￥399'
      },
      {
        logo: '/image/swiper_03.jpg',
        title: "总统套房",
        desc: '￥999'
      },
      {
        logo: '/image/swiper_01.jpg',
        title: '家庭套房',
        desc: '￥666'
      }
    ]
  },
  onLoad: function () {
    this.setData({
      test:'01',
    })
    // this.getProList();
  },
  doThis:function(e){
    
  },
  toDetail:function(e){
    wx.showModal({
      title: '提示',
      content: '详情正在开发中',
    })
    // var index = e.currentTarget.dataset.index
    // console.log(index);
    // var proList = this.data.proList ;
    // var title = proList[index].title;
    // // console.log(title)
    // // wx.setStorageSync('title', title);
    // wx.navigateTo({
    //   url:'/pages/detail/detail?title='+title,
    // })
  },
  copy:function(){
    if (wx.setClipboardData){
      wx.setClipboardData({
        data: '这是复制内容',
        success: function () {
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功',
          })
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '微信版本太极请升级',
      })
    }
  },
  // getProList:function(){
  //   var self = this;
  //   wx.request({
  //     url:app.blobalData.host,
  //     method:'GET',
  //     success:function(res){
  //       console.log(res);
  //       self.setData({
  //         proList:res.data,
  //       })
  //     },
  //     fail:function(res){

  //     }
  //   })
  // }
})
