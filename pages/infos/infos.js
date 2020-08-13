// pages/intro/intro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //是否显示侧边导航标志
      isShowSideBar:false,
      //动态文章数组
      articleList:[
        {aid:1234,title:"75岁老人造干移植重获新生 '鄞医'白血治疗又刷新记录",content:'因患急性白血病的75岁象山老人童老伯，经宁波大学附属人民医院、鄞州人民医院血液科实施造血干细胞移植术治疗一个多月后，康复出院',dateTime:155433610000},
        {aid:1235,title:"陈主任，谢谢您给了我第三次生命",content:"近日，因'恶性淋巴瘤'在我院泌尿外科接受治疗的朱女士出院之际，特地将2面锦旗赠送到二十一病区的...",dateTime:155433610000},
        {aid:1236,title:"暖心故事丨抱着七旬老人下手术台，家属、网...",content:'感谢黎良达医生在我母亲生命危重的情况下及时抢救、精心治疗，让我母亲获得了第二次生命。黎医生与...',dateTime:155433610000},
        {aid:1237,title:"鄞医的微血管减压术，帮八旬老人治好了三叉...",content:'“我以后再也不用被三叉神经痛折磨的头疼头晕了。”22日，84岁的刘老伯笑着说。5年前，刘老伯被...',dateTime:155433610000},
        {aid:1238,title:"可怕！宁波小伙子把可乐当水喝，结果查出白内障",content:'可乐，是不少人的最爱，尤其在大热天喝上一杯冰可乐解渴，真的非常爽!可是可乐中含有少量的咖啡因，...',dateTime:155433610000},
        {aid:1239,title:"【喜讯】宁波大学附属人民医院签约揭牌仪式...",content:'6月19日上午，宁波大学、鄞州区人民政府共建宁波大学附属人民医院签约揭牌仪式，在鄞州区文化艺术...',dateTime:155433610000},
        {aid:1254,title:"'圣光'照一下，肿瘤灰飞烟灭！鄞州人民医...",content:'采用特殊波长的光束，利用光化学反应原理治疗恶性肿瘤，这是目前国内外治疗恶性肿瘤的又一种新方法。...',dateTime:155433610000},
        {aid:1264,title:"延边行 | 胡建雷疼痛工作室在和龙成立",content:'胡建雷医生在我院成立疼痛门诊，填补了我院学术空白，同时培养了两名优秀疼痛专家，为我院后续疼痛...',dateTime:155433610000}
      ]
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
      //console.log('我加载了');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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