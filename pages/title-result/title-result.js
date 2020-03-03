// pages/title-result/title-result.js
var url="http://apis.juhe.cn/cook/query";
var apiKey = " ";//请自行申请api接口

Page({

  data: {
    inputValue:'',
    resultmenu:[]
  },

  /**
   * 获取输入框的值
   */
  bindInput:function(e){
    var that=this;
    that.setData({
      inputValue:e.detail.value
    });
  },

  //点击搜索按钮调用的函数
  search:function(e){
    var that=this;
    

    //发起请求，注意wx.request发起的是https请求
    //接口地址：http://apis.juhe.cn/cook/query
    //请求示例：http://apis.juhe.cn/cook/query?key=&menu=%E8%A5%BF%E7%BA%A2%E6%9F%BF&rn=10&pn=3
    wx.request({
      url:url+"?key="+apiKey+"&menu="+that.data.inputValue+"&rn=10&pn=3",
      success(res){
        console.log(res);
        if(res.data.error_code===0){
          that.setData({
            resultmenu:res.data.result.data
          })
        }
      }
    })

      /**
       * success:function(res){
        var data=res.data;
        that.setData({
          restation:data.result,
          condition:false
        });
      } 
       */
  },

  bindPickerChange_age: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_age: e.detail.value
    })
  },

  bindPickerChange_meal: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_meal: e.detail.value
    })
  },

  bindPickerChange_condition: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_condition: e.detail.value
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