//index.js
//获取应用实例
// import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
const app = getApp()

Page({
  data: {
    //是否显示侧边导航标志
    isShowSideBar:false,
    //轮播图数组
    swiperList:[
      'https://www.nbyzyy.com/Content/WebApp/images/banner01.jpg',
      'https://www.nbyzyy.com/Content/WebApp/images/banner02.jpg',
      'https://www.nbyzyy.com/Content/WebApp/images/banner03.jpg'
    ],
    //专家门诊安排数组
    expertList:[
      [
        {depyId:1234,dept:"肛肠外科",time:"上午",docName:"叶能红"},
        {depyId:1264,dept:"血管、疝外科",time:"上午",docName:"王辉"}
      ],
      [
        {depyId:1634,dept:"消化科",time:"上午",docName:"许丰"},
        {depyId:1239,dept:"消化科",time:"上午",docName:"李小平"}
      ],
      [
        {depyId:3434,dept:"口腔科",time:"上午",docName:"余丽君"},
        {depyId:6765,dept:"肛肠外科",time:"上午",docName:"周贤德"}
      ],
      [
        {depyId:9234,dept:"肿瘤放化疗中心",time:"上午",docName:"王锡恩"},
        {depyId:1274,dept:"肿瘤放化疗中心",time:"上午",docName:"陈科"}
      ],
      [
        {depyId:1564,dept:"心血管内科",time:"上午",docName:"王春明"},
        {depyId:1674,dept:"心血管内科",time:"上午",docName:"张奇军"}
      ],
      [
        {depyId:1784,dept:"妇科",time:"上午",docName:"高锦清"},
        {depyId:4634,dept:"妇科",time:"上午",docName:"董燕儿"}
      ]
    ],
    //中间导航图标
    middleList:[
      {iconUrl:'https://www.nbyzyy.com/Content/WebApp/images/ico01.png',name:'就医向导',navigate_url:''},
      {iconUrl:'https://www.nbyzyy.com/Content/WebApp/images/ico02.png',name:'预约挂号',navigate_url:"/pages/booking/booking"},
      {iconUrl:'https://www.nbyzyy.com/Content/WebApp/images/ico03.png',name:'出诊安排',navigate_url:"/pages/arrange/arrange"},
      {iconUrl:'https://www.nbyzyy.com/Content/WebApp/images/ico04.png',name:'科室介绍',navigate_url:"/pages/deptList/deptList"}
    ],
    //中间导航图标颜色数组
    listColor:['#60acd1','#ffd76d','#ff8c6d','#5a9bb9'],
    //医院动态数组
    hostpitalInfos:[
      {aid:1234,title:"75岁老人造干移植重获新生'鄞医'白血病治疗又刷新记录",date:'04-03'},
      {aid:1245,title:"陈主任，谢谢您给了我第三次生命",date:'04-03'},
      {aid:1246,title:"暖心故事丨抱着七旬老人下手术台，家属、网友点赞这位医生",date:'04-03'},
      {aid:1247,title:"鄞医的微血管减压术，帮八旬老人治好了三叉神经痛",date:'04-03'},
      {aid:1248,title:"可怕！宁波小伙子把可乐当水喝，结果查出白内障",date:'04-03'}
    ]
  },
  //事件处理函数
  onLoad: function () {
    
  },
  onShow: function () {
    this.setData({
      isShowSideBar:false,
    })
  },
  //侧边导航栏自定义事件处理函数
  // handleTabsChange(e) {
  //   const index=e.detail;
  //   if(index==0){
  //     wx.navigateTo({
  //       url: '/pages/intro/intro'
  //     })
  //   }
    
  // },
  //点击显示侧边导航栏
  triggerSidebar(){
    let isShowSideBar=this.data.isShowSideBar
    isShowSideBar=!isShowSideBar;
    //console.log(isShowSideBar);
    this.setData({
      isShowSideBar
    })
  }
 
})
