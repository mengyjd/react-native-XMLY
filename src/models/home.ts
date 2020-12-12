/*
 * @Description:
 * @Author: 高锐
 * @Date: 2020-12-12 17:12:18
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-12 18:21:28
 */
import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';

interface HomeState {
  num: number;
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    add: Reducer<HomeState>;
  };
  effects: {
    asyncAdd: Effect;
  };
}

const initialState = {
  num: 0,
};

function delay(timeout: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout);
  })
}

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    add(state = initialState, {payload}) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
  effects: {
    *asyncAdd({payload}, {call,put}) {
      yield call(delay, 3000)
      yield put({
        type: 'add',
        payload,
      })
    } 
  }
};

export default homeModel;
