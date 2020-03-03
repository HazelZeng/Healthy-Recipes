// pages/status-result/status-result.js
var url="http://apis.juhe.cn/cook/query";
var apiKey=" ";//请自行申请api接口

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array_state: ['贫血','便秘','腹泻','感冒','咳嗽','甲亢','痛风','胃痛','失眠','健忘','骨折','痔疮','晕车','低血糖','消化不良','月经不调','口腔溃疡','骨质疏松'],
    objectArray_state: [

      {
        id:"165",
        name:"贫血",
      },
      {
        id:"164",
        name:"便秘",
      },
      {
        id:"166",
        name:"腹泻",
      },
      {
        id:"167",
        name:"感冒",
      },
      {
        id:"168",
        name:"咳嗽",
      },
      {
        id:"169",
        name:"甲亢",
      },
      {
        id:"170",
        name:"痛风",
      },
      {
        id:"171",
        name:"胃痛",
      },
      {
        id:"172",
        name:"失眠",
      },
      {
        id:"173",
        name:"健忘",
      },
      {
        id:"174",
        name:"骨折",
      },
      {
        id:"175",
        name:"痔疮",
      },
      {
        id:"176",
        name:"晕车",
      },
      {
        id:"177",
        name:"低血糖",
      },
      {
        id:"178",
        name:"消化不良",
      },
      {
        id:"179",
        name:"月经不调",
      },
      {
        id:"180",
        name:"口腔溃疡",
      },
      {
        id:"181",
        name:"骨质疏松",
      }
    ],
    menuID:[],
    menuList:[],
    index_state: 0,
    resultmenu:[],
  },

  bindPickerChange_state: function (e) {
    var index_state=this.data.index_state
    var _this=this
    console.log('picker发送选择改变，携带下标为',e.detail.value)
    _this.setData({
      index_state: e.detail.value
    })
    //返回选择器中选项及其对应的值
    console.log('picker发送选择改变，携带值为',this.data.objectArray_state[e.detail.value].id)
    _this.setData({
      menuId:_this.data.objectArray_state[e.detail.value].id
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