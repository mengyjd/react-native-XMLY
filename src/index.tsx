import React from 'react';
import Navigator from '@/navigator/index';
import {Provider} from 'react-redux';
import store from '@/config/dva';
import {StatusBar} from 'react-native';
import '@/config/http'

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
        <Navigator />
      </Provider>
    );
  }
}
