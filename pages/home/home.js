import {
  getGoods
} from '../../apis/goods.js';

Page({
  data: {
    goodsList: [],
  },

  onLoad() {
    this.getList();
  },

  getList() {
    getGoods((res) => {
      this.setData({
        goodsList: res.data
      })
    })
  },

  gotoGoodsDetail(e){
    const { index } = e.detail;
    const { id } = this.data.goodsList[index];
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    });
  }
})