import {IChannel} from '@/models/home';
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from '@/assets/iconfont/index';
import Touchable from '@/components/Touchable';

interface IProps {
  data: IChannel;
  onPress: (data: IChannel) => void;
}

class ChannelItem extends Component<IProps> {
  onPress = () => {
    const {onPress, data} = this.props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  };

  render() {
    const {data} = this.props;

    return (
      <Touchable style={styles.container} onPress={this.onPress}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {data.title}
          </Text>
          <Text numberOfLines={1} style={styles.remark}>
            {data.remark}
          </Text>
          <View style={styles.bottom}>
            <View style={styles.bLeft}>
              <Icon name="erji" />
              <Text style={styles.bText}>{data.played}</Text>
            </View>
            <View style={styles.bRight}>
              <Icon name="yinpin" />
              <Text style={styles.bText}>{data.playing}</Text>
            </View>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  rightContainer: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
  },
  remark: {
    fontSize: 15,
    backgroundColor: '#f8f8f8',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 7,
  },
  bottom: {
    flexDirection: 'row',
  },
  bLeft: {
    flexDirection: 'row',
    marginRight: 15,
  },
  bRight: {
    flexDirection: 'row',
  },
  bText: {
    marginLeft: 3,
  },
});

export default ChannelItem;
