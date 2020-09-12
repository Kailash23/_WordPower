import React from 'react';
import {BackIcon} from '../assets/icons';
import {TouchableOpacity} from 'react-native';

export function BackBtn({size, color, style, onPress}) {
  return (
    <TouchableOpacity {...{style, onPress}}>
      <BackIcon width={size} height={size} {...{color}} />
    </TouchableOpacity>
  );
}

BackBtn.defaultProps = {
  size: 20,
  color: 'grey',
};
