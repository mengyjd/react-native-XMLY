/*
 * @Description: Home
 * @Author: 高锐
 * @Date: 2020-12-11 14:52:30
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-11 21:41:55
 */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

class Listen extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props
    navigation.navigate("Detail", {
      id: 103
    })
  }

  render() {
    return (
      <View>
        <Text>Listen</Text>
        <Button title="跳转到详情页" onPress={this.onPress} />
      </View>
    );
  }
}

export default Listen;
