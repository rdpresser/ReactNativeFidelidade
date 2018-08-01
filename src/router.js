import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createStackNavigator, createTabNavigator, createSwitchNavigator } from 'react-navigation';
import { FontAwesome } from 'react-native-vector-icons';

import SignIn from './screens/SignIn';
import Home from './screens/Home';
import Profile from './screens/Profile';

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Login',
      headerStyle
    }
  }
});

export const SignedIn = createTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Pontuação',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='home' size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='user' size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignIn
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};
