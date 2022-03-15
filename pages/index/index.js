//引入发送请求的方法
import {request} from "../../request/index.js";
Page({


  data: {
    //轮播图数组
    swiperList:[]
  },

  
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api.it120.cc/WHU/banner/list',
    //   success: (result)=>{
    //     console.log(result.data.data)
    //     this.setData({
    //       swiperList:result.data.data
    //     })
    //   }
    // });

    request({url: 'https://api.it120.cc/WHU/banner/list'})
    .then(result => {
    this.setData({
          swiperList:result.data.data
        })
    })
  }

}) 