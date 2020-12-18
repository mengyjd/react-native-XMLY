/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconMark from './IconMark';
import IconBofang from './IconBofang';
import IconTime from './IconTime';
import IconErji from './IconErji';
import IconMore from './IconMore';
import IconShouye from './IconShouye';
import IconMy from './IconMy';
import IconJia from './IconJia';
import IconFanhui from './IconFanhui';
import IconJian from './IconJian';
import IconZiyuan from './IconZiyuan';
import IconGengxin from './IconGengxin';
import IconFaxian from './IconFaxian';
import IconYinpin from './IconYinpin';
import IconXihuan from './IconXihuan';

export type IconNames = 'mark' | 'bofang' | 'time' | 'erji' | 'more' | 'shouye' | 'my' | 'jia' | 'fanhui' | 'jian' | 'ziyuan' | 'gengxin' | 'faxian' | 'yinpin' | 'xihuan';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'mark':
      return <IconMark key="1" {...rest} />;
    case 'bofang':
      return <IconBofang key="2" {...rest} />;
    case 'time':
      return <IconTime key="3" {...rest} />;
    case 'erji':
      return <IconErji key="4" {...rest} />;
    case 'more':
      return <IconMore key="5" {...rest} />;
    case 'shouye':
      return <IconShouye key="6" {...rest} />;
    case 'my':
      return <IconMy key="7" {...rest} />;
    case 'jia':
      return <IconJia key="8" {...rest} />;
    case 'fanhui':
      return <IconFanhui key="9" {...rest} />;
    case 'jian':
      return <IconJian key="10" {...rest} />;
    case 'ziyuan':
      return <IconZiyuan key="11" {...rest} />;
    case 'gengxin':
      return <IconGengxin key="12" {...rest} />;
    case 'faxian':
      return <IconFaxian key="13" {...rest} />;
    case 'yinpin':
      return <IconYinpin key="14" {...rest} />;
    case 'xihuan':
      return <IconXihuan key="15" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
