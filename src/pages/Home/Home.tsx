/*
 * @Description: Home
 * @Author: 高锐
 * @Date: 2020-12-11 14:52:30
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-18 21:46:29
 */
import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import Carousel from './Carousel';
import Guess from './Guess';

const mapStateToProps = ({home, loading}: RootState) => {
  return {
    carousels: home.carousels,
    loading: loading.effects['home/fetchCarousels'],
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchCarousels',
    });
  }

  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  handleAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 10,
      },
    });
  };

  handleAsyncAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 100,
      },
    });
  };

  render() {
    const {carousels} = this.props;
    return (
      <ScrollView>
        <Carousel data={carousels} />
        <Guess />
      </ScrollView>
    );
  }
}

export default connector(Home);
