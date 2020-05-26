import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import UIHelper from '../common/helpers/UIHelper';

export const MARGIN_HORIZONTAL = 14;

const clock = new Animated.Clock();
const opacityAnim = UIHelper.runTiming(clock, 0, 1, 500);

const ResultRow = React.memo(({result, handleResultPress, containerStyle}) => {
  const scale = new Animated.Value(1);

  return (
    <TouchableOpacity
      onPressIn={() => Animated.timing(scale, UIHelper.btnScaleAnim.in).start()}
      onPressOut={() =>
        Animated.timing(scale, UIHelper.btnScaleAnim.out).start()
      }
      onPress={() => {
        handleResultPress(result);
      }}>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacityAnim,
            transform: [{scale}],
          },
          containerStyle,
        ]}>
        <View style={styles.itemInfoContainer}>
          <Text numberOfLines={1} style={styles.word}>
            {result}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: MARGIN_HORIZONTAL,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 3,
  },
  cover: {
    height: 54,
    width: 54,
  },
  itemInfoContainer: {
    flexDirection: 'column',
    marginHorizontal: 12,
    maxWidth: '80%',
    marginTop: 2,
  },
  word: {
    flex: 1,
    color: 'black',
    letterSpacing: 0.8,
    fontSize: 18,
  },
});

export default ResultRow;
