// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  tell:function(){
    wx.makePhoneCall({
      phoneNumber: '17600483161',
    })
  }
})