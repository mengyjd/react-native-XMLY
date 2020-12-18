import React, {Component} from 'react';
import {Alert, FlatList, Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {IGuess} from '@/models/home';
import Touchable from '@/components/Touchable';
import Icon from '@/assets/iconfont/index';

const mapStateToProps = ({home}: RootState) => {
  return {
    guess: home.guess,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class Guess extends Component<ModelState> {
  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchGuess',
    });
  };

  renderItem = ({item}: {item: IGuess}) => {
    return (
      <Touchable
        style={styles.item}
        onPress={() => {
          alert('123');
        }}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </Touchable>
    );
  };
  render() {
    const {guess} = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.left}>
            <Icon style={styles.iconLike} name="xihuan" />
            <Text style={styles.headerText}>猜你喜欢</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.moreText}>更多</Text>
            <Icon name="more" />
          </View>
        </View>

        <FlatList numColumns={3} data={guess} renderItem={this.renderItem} />

        <Touchable style={styles.changeGuess} onPress={this.fetch}>
          <Icon style={styles.changeGuessIcon} size={23} color="red" name="gengxin" />
          <Text>换一批</Text>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 5,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 6,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    color: '#333',
  },
  moreText: {
    color: '#6f6f6f',
  },
  iconLike: {
    marginRight: 5,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeGuess: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  changeGuessIcon: {
    marginRight: 3,
  },
});

export default connector(Guess);
