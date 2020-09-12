import AsyncStorage from '@react-native-community/async-storage';

/**
 * Loads a string from storage.
 */
export async function loadString(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Saves a string to storage.
 */
export async function saveString(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it through JSON.parse.
 */
export async function load(key) {
  try {
    const almostThere = await AsyncStorage.getItem(key);
    return JSON.parse(almostThere);
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 */
export async function save(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to remove.
 */
export async function remove(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
}

/**
 * Clear async store.
 */
export async function clear() {
  try {
    await AsyncStorage.clear();
  } catch {}
}
