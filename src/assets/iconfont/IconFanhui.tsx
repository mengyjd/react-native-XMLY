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

let IconFanhui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M879.476364 470.341818H244.829091L507.112727 209.454545a41.658182 41.658182 0 0 0-58.88-58.88L114.967273 482.676364a41.890909 41.890909 0 0 0 0 58.88l333.265454 333.032727a41.658182 41.658182 0 0 0 58.88 0 41.890909 41.890909 0 0 0 0-58.88L244.829091 553.658182h634.647273a41.658182 41.658182 0 1 0 0-83.316364z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFanhui.defaultProps = {
  size: 18,
};

IconFanhui = React.memo ? React.memo(IconFanhui) : IconFanhui;

export default IconFanhui;
