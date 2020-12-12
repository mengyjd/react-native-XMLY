/*
 * @Description: Detail
 * @Author: 高锐
 * @Date: 2020-12-11 14:54:28
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-11 18:54:12
 */
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '@/navigator/index'

interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>
}

class Detail extends React.Component<IProps> {
  render() {
    const { route } = this.props
    return (
      <View>
        <Text>Detail</Text>
        <Text>{route.params.id}</Text>
      </View>
    )
  }
}

export default Detail

