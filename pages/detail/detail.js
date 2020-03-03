// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //食谱详情
    menuInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接收id
    let menuId=options.id;
    this.getCurrentMenu(menuId);
  },

  /**
   * 根据食谱id获取食谱详情
   */
  getCurrentMenu(menuId){
    let that=this;
    wx.request({
      //请求示例：http://apis.juhe.cn/cook/queryid?key=您申请的KEY&id=1001
      //请求地址：http://apis.juhe.cn/cook/queryid
      //请求参数：id=1001&dtype=&key=1d9f514c1750f0236ca5e339054df3d2
      url:"http://apis.juhe.cn/cook/queryid?key=1d9f514c1750f0236ca5e339054df3d2&id="+menuId,
      success(res){
        console.log(res);
        if(res.data.error_code===0){
          that.setData({
            menuInfo:res.data.result.data[0]
          })
        }
      }
    })
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