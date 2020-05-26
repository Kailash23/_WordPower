import React from 'react';
import {View, StyleSheet} from 'react-native';

const DotsView = ({color, containerStyle}) => {
  const bgColor = color ? color : 'grey';

  return (
    <View style={[{flexDirection: 'column'}, containerStyle]}>
      <View
        style={[
          styles.dot,
          {
            marginBottom: 5.5,
            backgroundColor: bgColor,
          },
        ]}
      />
      <View
        style={[
          styles.dot,
          {
            marginBottom: 5.5,
            backgroundColor: bgColor,
          },
        ]}
      />
      <View
        style={[
          styles.dot,
          {
            backgroundColor: bgColor,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 2.5,
    width: 2.5,
    borderRadius: 2,
  },
});

export default DotsView;
