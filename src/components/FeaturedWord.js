import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';

const FeaturedWord = ({offsetY, item}) => {
  const word = Object.keys(item)[0];
  const meaning = item[word]?.definition;
  const example = item[word]?.example;

  const scaleAnim = offsetY.interpolate({
    inputRange: [0, 250],
    outputRange: [1, 0.9],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const opacityAnim = offsetY.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacityAnim,
          transform: [{scaleX: scaleAnim}, {scaleY: scaleAnim}],
        },
      ]}>
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          style={[
            styles.title,
            {
              fontSize: word && word.length > 36 ? 18 : 24,
              marginTop: 0,
            },
          ]}>
          {word}
        </Text>
        {meaning && <Text style={styles.meaning}>{meaning}</Text>}
      </View>
      {example && (
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.usage}>
            Example
          </Text>
          <Text style={styles.meaning}>{example}</Text>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
  },
  textContainer: {alignItems: 'center'},
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.6,
    textAlign: 'center',
    marginHorizontal: 50,
  },
  meaning: {
    marginTop: 5,
    color: 'black',
    fontSize: 14,
    letterSpacing: 0.6,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  usage: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.6,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 20,
  },
});

export default FeaturedWord;
