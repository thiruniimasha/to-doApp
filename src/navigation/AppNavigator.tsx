import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoScreen } from '../screens/TodoScreen';
import { RootStackParamList } from './types';
import { Colors } from '../styles/theme';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.backgroundMedium,
          },
          headerTintColor: Colors.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          cardStyle: {
            backgroundColor: Colors.backgroundDark,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={TodoScreen}
          options={{ title: 'Todo App' }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};