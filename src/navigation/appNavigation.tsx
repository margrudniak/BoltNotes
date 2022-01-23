import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';
import {HomeScreen} from '../views';
import {ParamList, Screens} from './screenParams';

const RootStack = createStackNavigator<ParamList>();

const AppStack = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.Home}>
      <RootStack.Screen name={Screens.Home} component={HomeScreen} />
    </RootStack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
