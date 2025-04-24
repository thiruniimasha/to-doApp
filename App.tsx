// App.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { Colors } from './src/styles/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <StatusBar barStyle="light-content" backgroundColor={Colors.backgroundDark} />
    <AppNavigator />
  </SafeAreaProvider>
  );
}