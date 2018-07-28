import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-token-key-signin';

export const onSignIn = async () => await AsyncStorage.setItem(USER_KEY, 'true');

export const onSignOut = async () => await AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = async () => await AsyncStorage.getItem(USER_KEY);
