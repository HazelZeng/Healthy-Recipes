// pages/effect-result/effect-result.js
var url="http://apis.juhe.cn/cook/query";
var apiKey = " ";//请自行申请api接口

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array_effect: ['清肺','护肝','减肥','养胃','丰胸','排毒','补血','补钙','提高免疫力','美容','补肾','润肺',
        '滋阴','抗衰老','降血压','祛痘','防癌','增肥','明目','防辐射','降血脂','健脑益智','增高','壮阳','乌发',
        '调经','助睡眠','健脾胃','润肠通便'],
    objectArray_effect: [
      {
        id:"28",
        name:"清肺",
      },
      {
        id:"29",
        name:"护肝",
      },
      {
        id:"30",
        name:"减肥",
      },
      {
        id:"31",
        name:"养胃",
      },
      {
        id:"32",
        name:"丰胸",
      },
      {
        id:"33",
        name:"排毒",
      },
      {
        id:"34",
        name:"补血",
      },
      {
        id:"35",
        name:"补钙",
      },
      {
        id:"36",
        name:"提高免疫力",
      },
      {
        id:"129",
        name:"美容",
      },
      {
        id:"130",
        name:"补肾",
      },
      {
        id:"131",
        name:"润肺",
      },
      {
        id:"133",
        name:"滋阴",
      },
      {
        id:"135",
        name:"抗衰老",
      },
      {
        id:"136",
        name:"降血压",
      },
      {
        id:"137",
        name:"祛痘",
      },
      {
        id:"139",
        name:"防癌",
      },
      {
        id:"140",
        name:"增肥",
      },
      {
        id:"142",
        name:"明目",
      },
      {
        id:"143",
        name:"防辐射",
      },
      {
        id:"144",
        name:"降血脂",
      },
      {
        id:"145",
        name:"健脑益智",
      },
      {
        id:"147",
        name:"增高",
      },
      {
        id:"148",
        name:"壮阳",
      },
      {
        id:"149",
        name:"乌发",
      },
      {
        id:"150",
        name:"调经",
      },
      {
        id:"151",
        name:"助睡眠",
      },
      {
        id:"152",
        name:"健脾胃",
      },
      {
        id:"153",
        name:"润肠通便",
      }
    ],
    menuID:[],
    menuList:[],
    index_effect: 0,
    resultmenu:[],
  },

  bindPickerChange_effect: function (e) {
    var index_effect=this.data.index_effect
    var _this=this
    console.log('picker发送选择改变，携带下标为',e.detail.value)
    _this.setData({
      index_effect: e.detail.value
    })
    //返回选择器中选项及其对应的值
    console.log('picker发送选择改变，携带值为',this.data.objectArray_effect[e.detail.value].id)
    _this.setData({
      menuId:_this.data.objectArray_effect[e.detail.value].id
    })
  },

  

  //点击搜索按钮调用的函数
  search:function(e){
    var that=this;
    wx.request({
      url:"http://apis.juhe.cn/cook/index?key="+apiKey+"&cid="+that.data.menuId,
      
      success(res){
        console.log(res);
        if(res.data.error_code===0){
          that.setData({
            resultmenu:res.data.result.data
          })
        }
      }
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