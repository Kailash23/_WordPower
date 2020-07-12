import React from 'react';
import {CheckIcon} from '../components/icons';
import {TouchableOpacity} from 'react-native';

const SubmitIcon = ({onPress, size, color}) => {
  return (
    <TouchableOpacity {...{onPress}}>
      <CheckIcon width={size} height={size} {...{color}} />
    </TouchableOpacity>
  );
};

export default SubmitIcon;
