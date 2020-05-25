import React from 'react';
import {StyleSheet, ToastAndroid, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import DotsView from './DotsView';

export const HEADER_HEIGHT = 42;

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.heartContainer}>
          <Icon
            onPress={() => {
              ToastAndroid.show('Heart!', ToastAndroid.SHORT);
            }}
            name={'heart-outline'}
            size={26}
            style={styles.heart}
          />
        </View>
        <View style={styles.dotsContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log('Dots')
              ToastAndroid.show('Dots!', ToastAndroid.SHORT);
            }}>
            <DotsView color={'black'} />
          </TouchableOpacity>
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    height: HEADER_HEIGHT,
  },
  heartContainer: {
    position: 'absolute',
    right: 50,
    top: 6,
    height: HEADER_HEIGHT,
    width: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    color: '#1E2125',
  },
  dotsContainer: {
    position: 'absolute',
    right: 9,
    top: 6,
    height: HEADER_HEIGHT,
    width: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
