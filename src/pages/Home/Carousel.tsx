import {ICarousel} from '@/models/home';
import {hp, viewportWidth, wp} from '@/utils/index';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SnapCarousel, {
  ParallaxImage,
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';

interface IProps {
  data: ICarousel[];
}

const sliderWidth = viewportWidth;
const sideWidth = wp(90);
const sideHeight = hp(26);
const itemWidth = sideWidth + wp(2) * 2;

export default class Carousel extends Component<IProps> {
  state = {
    activeSlide: 0,
  };

  onSnapToItem = (index: number) => {
    this.setState({
      activeSlide: index,
    });
  };

  get pagination() {
    const {activeSlide} = this.state;
    const {data} = this.props;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          activeDotIndex={activeSlide}
          dotsLength={data.length}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
        />
      </View>
    );
  }

  _renderItem = (
    {item}: {item: ICarousel},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.containerStyle}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor={'rgba(0,0,0,.25)'}
        {...parallaxProps}
      />
    );
  };

  render() {
    const {data} = this.props;
    return (
      <View>
        <SnapCarousel
          data={data}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages
          loop
          autoplay
          onSnapToItem={this.onSnapToItem}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    // width:
  },
  containerStyle: {
    width: itemWidth,
    height: sideHeight,
    borderRadius: 8,
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.93)',
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
