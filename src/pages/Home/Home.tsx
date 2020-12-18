/*
 * @Description: Home
 * @Author: 高锐
 * @Date: 2020-12-11 14:52:30
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-18 23:55:15
 */
import React from 'react';
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import Carousel from './Carousel';
import Guess from './Guess';
import Channel from './Channel';
import ChannelItem from './ChannelItem';
import {IChannel} from '@/models/home';

const mapStateToProps = ({home, loading}: RootState) => {
  return {
    carousels: home.carousels,
    channel: home.channel,
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
    
    dispatch({
      type: 'home/fetchChannel',
    });
  }

  onPressChannelItem(data: IChannel) {
    console.log(data);
  }

  get header() {
    return (
      <View>
        <Carousel data={this.props.carousels} />
        <Guess />
      </View>
    );
  }

  renderItem = ({item}: ListRenderItemInfo<IChannel>) => (
    <ChannelItem data={item} onPress={this.onPressChannelItem}/>
  );

  keyExtractor = (item: IChannel) => {
    return item.id
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={this.header}
        data={this.props.channel}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default connector(Home);
