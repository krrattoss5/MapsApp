import 'react-native-gesture-handler';
import React from 'react';

// import {enableLatestRenderer} from 'react-native-maps';
// enableLatestRenderer();
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {PermissionsChecker} from './presentation/providers/PermissionsChecker';


export const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  );
};
