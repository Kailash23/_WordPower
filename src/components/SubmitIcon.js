import React from 'react';
import {CheckIcon} from '../assets/icons';
import {TouchableOpacity} from 'react-native';

export function SubmitIcon({onPress, size, color}) {
  return (
    <TouchableOpacity {...{onPress}}>
      <CheckIcon width={size} height={size} {...{color}} />
    </TouchableOpacity>
  );
}
