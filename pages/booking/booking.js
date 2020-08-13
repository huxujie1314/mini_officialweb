// pages/deptDetail/deptDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //是否显示侧边导航标志
    isShowSideBar:false,
  },
  //点击显示侧边导航栏
  triggerSidebar(){
    let isShowSideBar=this.data.isShowSideBar
    isShowSideBar=!isShowSideBar;
    //console.log(isShowSideBar);
    this.setData({
      isShowSideBar
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      //页面显示的时候,设置回初始状态
    this.setData({
      isShowSideBar:false,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})