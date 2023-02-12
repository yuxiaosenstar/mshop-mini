// components/goods-card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currency: {
      type: String,
      value: '¥',
    },
    data: {
      type: Object,
      observer(data) {
        if (!data) {
          return;
        }
        this.setData({ goods: data });
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    goods: {
      id: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(){
      this.triggerEvent('click', { goods: this.data.goods });
    }
  }
})
