/*
 * @Description:
 * @Author: 高锐
 * @Date: 2020-12-12 17:12:18
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-17 21:12:17
 */
import axios from 'axios';
import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface IGuess {
  id: string;
  title: string;
  image: string;
}

interface HomeState {
  carousels: ICarousel[];
  guess: IGuess[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
    fetchGuess: Effect;
  };
}

const initialState = {
  carousels: [],
  guess: [],
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state = initialState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchCarousels(_, {call, put}) {
      const data = yield call(axios.get, '/carousel');

      yield put({
        type: 'setState',
        payload: {
          carousels: data.data,
        },
      });
    },
    *fetchGuess(_, {call, put}) {
      const data = yield call(axios.get, '/guess')

      yield put({
        type: 'setState',
        payload: {
          guess: data.data
        }
      })
    }
  },
};

export default homeModel;
