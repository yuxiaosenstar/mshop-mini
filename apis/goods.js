import { serviceName } from '../config/index';

export function getGoods(callback){
  wx.request({
    url: serviceName + '/goods',
    success(res){
      callback(res.data);
    }
  })
}

export function getDetail(data, callback){
  wx.request({
    url: serviceName + '/goods/detail',
    data,
    success(res){
      callback(res.data);
    }
  })
}