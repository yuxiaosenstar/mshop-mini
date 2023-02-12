import Toast from '@vant/weapp/toast/toast';
import { getDetail } from '../../apis/goods';

Page({
  data: {
    detail: {}
  },

  onLoad(options) {
    const { id } = options;
    this.getDetail(id);
  },

  getDetail(id){
    getDetail({ id }, (res) => {
      this.setData({
        detail: res.data
      })
    })
  },

  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  },
})