// pages/deptList/deptList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //是否显示侧边导航标志
    isShowSideBar:false,
    //科室信息数组
    deptList:[
      { typeId:1,
        typeName:'内科系统',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/1_2.png',
        children:[
          {deptId:100,deptName:'呼吸与危重症医学科'},
          {deptId:101,deptName:'血液化疗科'},
          {deptId:102,deptName:'肿瘤放化疗中心'},
          {deptId:103,deptName:'消化科'},
          {deptId:104,deptName:'重症监护病房'},
          {deptId:105,deptName:'消化肝病内科'},
          {deptId:106,deptName:'神经内科'},
          {deptId:107,deptName:'内分泌科'},
          {deptId:108,deptName:'肾内科'},
          {deptId:109,deptName:'心血管内科'},
          {deptId:110,deptName:'全科医学科'},
          {deptId:111,deptName:'感染科'},
          {deptId:112,deptName:'血透室'}
        ]
      },
      {
        typeId:2,
        typeName:'外科系统',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/2_2.png',
        children:[
          {deptId:200,deptName:'胃肠外科'},
          {deptId:201,deptName:'甲乳外科'},
          {deptId:202,deptName:'肝胆胰普外科'},
          {deptId:203,deptName:'血管、疝外科'},
          {deptId:204,deptName:'骨科'},
          {deptId:205,deptName:'神经外科'},
          {deptId:206,deptName:'心胸外科'},
          {deptId:207,deptName:'泌尿外科'},
          {deptId:208,deptName:'肛肠外科'},
          {deptId:209,deptName:'脊柱微创中心'}
        ]
      },
      {
        typeId:3,
        typeName:'妇儿系统',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/3_2.png',
        children:[
          {deptId:300,deptName:'妇科'},
          {deptId:301,deptName:'产科'},
          {deptId:302,deptName:'儿科'},
        ]
      },
      {
        typeId:4,
        typeName:'眼耳鼻喉口',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/5_2.png',
        children:[
          {deptId:400,deptName:'眼科中心'},
          {deptId:401,deptName:'耳鼻喉科'},
          {deptId:402,deptName:'口腔科'}
        ]
      },
      {
        typeId:5,
        typeName:'急救系统',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/8_2.png',
        children:[
          {deptId:500,deptName:'急救中心'},
          {deptId:501,deptName:'急诊病房'}
        ]
      },
      {
        typeId:6,
        typeName:'中医保健系统',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/9_2.png',
        children:[
          {deptId:600,deptName:'中医诊疗中心'},
          {deptId:601,deptName:'针灸科'},
          {deptId:602,deptName:'康复科'},
          {deptId:603,deptName:'睡眠门诊'},
          {deptId:604,deptName:'心理科'},
          {deptId:605,deptName:'营养科'}
        ]
      },
      {
        typeId:7,
        typeName:'皮肤整容系统',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/10_2.png',
        children:[
          {deptId:700,deptName:'皮肤性病科'},
          {deptId:701,deptName:'整形美容科'}
        ]
      },
      {
        typeId:8,
        typeName:'医技系统',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/11_2.png',
        children:[
          {deptId:800,deptName:'检验中心'},
          {deptId:801,deptName:'超声医学科'},
          {deptId:802,deptName:'特检科'},
          {deptId:803,deptName:'放射科'},
          {deptId:804,deptName:'病理科'},
          {deptId:805,deptName:'核医学科'},
          {deptId:806,deptName:'中心实验室'},
          {deptId:807,deptName:'输血科'},
          {deptId:808,deptName:'麻醉科'}
        ]
      },
      {
        typeId:9,
        typeName:'体检中心',
        typeImg:'https://www.nbyzyy.com/Content/Page/images/ico/12_2.png',
        children:[
          {deptId:900,deptName:'体检中心'}
        ]
      },
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