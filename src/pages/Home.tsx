/*
 * @Description: Home
 * @Author: 高锐
 * @Date: 2020-12-11 14:52:30
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-12 18:27:31
 */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../models';

const mapStateToProps = ({home, loading}: RootState) => {
  return {
    num: home.num,
    loading: loading.effects['home/asyncAdd']
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
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
    const {num, loading} = this.props;
    return (
      <View>
        <Text>Home{num}</Text>
        <Text>{loading ? '正在计算中...' : ''}</Text>
        <Button title="加" onPress={this.handleAdd} />
        <Button title="异步加" onPress={this.handleAsyncAdd} />
        <Button title="跳转到详情页" onPress={this.onPress} />
      </View>
    );
  }
}

export default connector(Home);
