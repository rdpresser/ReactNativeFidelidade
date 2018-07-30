import { AsyncStorage } from 'react-native';
import qs from 'query-string';

export const USER_KEY = 'USER_KEY';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';

export const onSignIn = async (token) => {
   const stringF = qs.stringify(token); //transforma obj json para string
   await AsyncStorage.setItem(USER_LOGGED_IN, stringF);
   await AsyncStorage.setItem(USER_KEY, 'true');
};

export const onSignOut = async () => await AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = async () => await AsyncStorage.getItem(USER_KEY);
