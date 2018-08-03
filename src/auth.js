import { AsyncStorage } from 'react-native';
import qs from 'query-string';

export const USER_KEY = 'USER_KEY';
export const USER_INFO = 'USER_INFO';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_NAME = 'USER_LOGGED_NAME';

export const onSignIn = async (token, userPwd) => {
   const stringF = qs.stringify(token); //transforma obj json para string
   await AsyncStorage.setItem(USER_LOGGED_IN, stringF);

   await AsyncStorage.setItem(USER_INFO, qs.stringify(userPwd));
   await AsyncStorage.setItem(USER_KEY, 'true');
};

export const onSignOut = async () => await AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = async () => await AsyncStorage.getItem(USER_KEY);

export const hasToken = async () => await AsyncStorage.getItem(USER_LOGGED_IN);

export const storeName = async () => qs.parse(await hasToken()).nomeParceiro;

export const getUserInfo = async () => qs.parse(await AsyncStorage.getItem(USER_INFO));

export const getUserLogin = async () => { 
   return (await getUserInfo()).username; 
};

export const setUserLoginName = async (user) => {
   await AsyncStorage.setItem(USER_LOGGED_NAME, user);
};

export const getUserLoginName = async () => await AsyncStorage.getItem(USER_LOGGED_NAME);
