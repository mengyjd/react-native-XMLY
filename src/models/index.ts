/*
 * @Description: 
 * @Author: 高锐
 * @Date: 2020-12-12 17:31:03
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-12 17:46:43
 */
import { DvaLoadingState } from 'dva-loading-ts'
import home from './home'

const models = [home]

export type RootState = {
  home: typeof home.state;
  loading: DvaLoadingState
}

export default models
