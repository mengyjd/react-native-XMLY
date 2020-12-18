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

let IconJia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M514 114.3c-219.9 0-398.8 178.9-398.8 398.8 0 220 178.9 398.9 398.8 398.9s398.8-178.9 398.8-398.8S733.9 114.3 514 114.3z m238.5 398.9c0 30.9-25.2 56.1-56.1 56.1H570.1v126.3c0 30.9-25.2 56.1-56.1 56.1s-56.1-25.2-56.1-56.1V569.3H331.6c-30.9 0-56.1-25.2-56.1-56.1s25.2-56.1 56.1-56.1h126.3V330.8c0-30.9 25.2-56.1 56.1-56.1 30.9 0 56.1 25.2 56.1 56.1v126.3h126.3c30.8 0 56.1 25.2 56.1 56.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJia.defaultProps = {
  size: 18,
};

IconJia = React.memo ? React.memo(IconJia) : IconJia;

export default IconJia;
