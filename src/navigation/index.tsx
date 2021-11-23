/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import * as routes from './routes';
import HomeScreen from "../screens/HomeScreen";
import { Theme } from "@react-navigation/native/lib/typescript/src/types";

export default function Navigation({ theme }: { theme: Theme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={HomeScreen} options={{ title: 'Classes' }} />
    </Stack.Navigator>
  );
}
