import AsyncStorage from '@react-native-community/async-storage';

const KEY = '@wordpower/DATABASE';

export async function setDbExistsAsync(data) {
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
}

export async function getDbExistsAsync() {
  try {
    const data = await AsyncStorage.getItem(KEY);
    if (!data) {
      return false;
    }
    return JSON.parse(data);
  } catch (e) {
    return false;
  }
}
