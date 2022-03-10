import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './src/navigation';

const App = () => {
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
