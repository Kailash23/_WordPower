import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SubmitIcon = ({handlePress, iconStyle, size, color}) => {
  return (
    <MaterialIcon
      onPress={handlePress}
      style={iconStyle}
      name="check"
      size={size}
      color={color}
    />
  );
};

export default SubmitIcon;
