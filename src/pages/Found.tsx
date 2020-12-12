/*
 * @Description: Home
 * @Author: 高锐
 * @Date: 2020-12-11 14:52:30
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-11 18:52:02
 */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

class Found extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props
    navigation.navigate("Detail", {
      id: 102
    })
  }

  render() {
    return (
      <View>
        <Text>Found</Text>
        <Button title="跳转到详情页" onPress={this.onPress} />
      </View>
    );
  }
}

export default Found;
