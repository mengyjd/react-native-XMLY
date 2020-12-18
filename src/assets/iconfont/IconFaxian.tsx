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

let IconFaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z m179.439252 267.364486l-260.186916 93.906542a115.439252 115.439252 0 0 0-69.383177 69.383178l-94.504673 260.186915a51.140187 51.140187 0 0 0 65.495327 65.495328l260.485981-93.607477a115.439252 115.439252 0 0 0 69.383178-69.383178l93.607477-260.485981a51.140187 51.140187 0 0 0-65.495328-65.495327z m-179.439252 308.635514A64 64 0 1 0 448.598131 512a64 64 0 0 0 64 64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFaxian.defaultProps = {
  size: 18,
};

IconFaxian = React.memo ? React.memo(IconFaxian) : IconFaxian;

export default IconFaxian;
