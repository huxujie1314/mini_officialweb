// components/Sidebar/Sidebar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    activeKey: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      //console.log(event.detail);
      const index=event.detail
      //this.triggerEvent('tabsItemChange',index);
      if(index==0){
        wx.navigateTo({
          url: '../../pages/intro/intro'
        })
      }else if(index==1){
        wx.navigateTo({
          url: '../../pages/infos/infos'
        })
      }else if(index==2){
        wx.navigateTo({
          url: '../../pages/deptList/deptList'
        })
      }else if(index==3){
        wx.navigateTo({
          url: '../../pages/arrange/arrange'
        })
      }else if(index==5){
        wx.navigateTo({
          url: '../../pages/booking/booking'
        })
      }else if(index==6){
        wx.navigateTo({
          url: '../../pages/contact/contact'
        })
      }
    },
  }
})
