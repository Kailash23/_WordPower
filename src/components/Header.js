import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
// import DotsView from './DotsView';

export const HEADER_HEIGHT = 42;

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}
          style={styles.iconContainer}>
          <Icon
            name="magnifier-add"
            size={26}
            style={styles.heart}
            activeOpacity={0.5}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.dotsContainer}
          onPress={() => {
          }}>
          <DotsView color={'black'} />
        </TouchableOpacity> */}
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
  iconContainer: {
    position: 'absolute',
    left: 10,
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
