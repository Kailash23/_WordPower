import React from 'react';
import {BackIcon} from './icons';
import {TouchableOpacity} from 'react-native';

const BackBtn = ({size, color, style, onPress}) => {
  return (
    <TouchableOpacity {...{style, onPress}}>
      <BackIcon width={size} height={size} {...{color}} />
    </TouchableOpacity>
  );
};

BackBtn.defaultProps = {
  size: 20,
  color: 'grey',
};

export default BackBtn;
