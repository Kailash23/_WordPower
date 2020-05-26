import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BackBtnSearch = ({
  tintColor,
  textStyle,
  onPress,
  size,
}) => {
  return (
    <Icon
      onPress={onPress}
      style={[textStyle]}
      name="arrow-left"
      size={size || 26}
      color={tintColor}
    />
  );
};

export default BackBtnSearch;
