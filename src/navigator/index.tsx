/*
 * @Description: navigator
 * @Author: 高锐
 * @Date: 2020-12-11 14:55:27
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-12 23:44:19
 */
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import Detail from '@/pages/Detail';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import BottomTabs from './BottomTabs';

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

let Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Detail: {
    id: number;
  };
};

// type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
//   state?: TabNavigationState<RootStackParamList>;
// };

// TODO:类型处理

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route);

  switch (routeName) {
    case 'HomeTabs':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '我的';
    default:
      return '首页';
  }
}

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStatusBarHeight: StatusBar.currentHeight,
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={({route}) => ({
              headerTitle: getHeaderTitle(route),
            })}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle: '详情页',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
