/*
 * @Description: 工具函数
 * @Author: 高锐
 * @Date: 2020-12-10 16:09:01
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-13 15:43:32
 */

import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

// 根据百分比获取宽度
function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return value;
}

// 根据百分比获取高度
function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100;
  return value;
}

export {viewportWidth, viewportHeight, wp, hp};
