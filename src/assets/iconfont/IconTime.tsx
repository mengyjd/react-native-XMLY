/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconTime: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M857.034752 164.405248C764.735488 72.105984 642.01728 21.274624 511.488 21.274624c-130.531328 0-253.247488 50.83136-345.546752 143.130624S22.810624 379.420672 22.810624 509.952c0 130.52928 50.83136 253.247488 143.130624 345.546752s215.015424 143.130624 345.546752 143.130624c130.52928 0 253.247488-50.83136 345.546752-143.130624S1000.165376 640.48128 1000.165376 509.952c0-130.531328-50.83136-253.247488-143.130624-345.546752zM511.488 953.716736c-244.692992 0-443.764736-199.071744-443.764736-443.764736S266.795008 66.187264 511.488 66.187264 955.252736 265.259008 955.252736 509.952 756.180992 953.716736 511.488 953.716736z"
        fill={getIconColor(color, 0, '#2D333A')}
      />
      <Path
        d="M500.641792 243.539968h-44.91264v322.17088h322.17088v-44.91264h-277.25824z"
        fill={getIconColor(color, 1, '#2D333A')}
      />
    </Svg>
  );
};

IconTime.defaultProps = {
  size: 18,
};

IconTime = React.memo ? React.memo(IconTime) : IconTime;

export default IconTime;
