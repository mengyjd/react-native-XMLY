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

let IconZiyuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.951499 1023.999903A511.951499 511.951499 0 1 1 939.982877 793.074213a27.424243 27.424243 0 0 1-45.933184-30.137596 456.32777 456.32777 0 1 0-136.34597 134.601672 27.424243 27.424243 0 1 1 29.071635 46.2239 510.110295 510.110295 0 0 1-274.823859 80.237714z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M385.489885 707.409794A27.424243 27.424243 0 0 1 358.55017 679.985551V344.014352a27.521148 27.521148 0 0 1 54.94539 0v335.971199A27.521148 27.521148 0 0 1 385.489885 707.409794zM637.444058 707.409794A27.424243 27.424243 0 0 1 610.504343 679.985551V344.014352a27.521148 27.521148 0 0 1 54.945391 0v335.971199A27.521148 27.521148 0 0 1 637.444058 707.409794z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconZiyuan.defaultProps = {
  size: 18,
};

IconZiyuan = React.memo ? React.memo(IconZiyuan) : IconZiyuan;

export default IconZiyuan;
