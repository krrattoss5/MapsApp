import {PropsWithChildren, useEffect} from 'react';
import {AppState} from 'react-native';
import {usePermissionsStore} from '../store/permissions/usePermissionsStore';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '../navigation/StackNavigator';
export const PermissionsChecker = ({children}: PropsWithChildren) => {
  const {locationStatus, checkLocationPermission} = usePermissionsStore();

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  useEffect(() => {
    if (locationStatus === 'granted') {
      // navigation.navigate('MapsScreen');
      // forma de resetear la navegación
      navigation.reset({
        index: 0,
        routes: [{name: 'MapsScreen'}],
      });
    } else if (locationStatus !== 'undetermined') {
      // navigation.navigate('PermissionsScreen');
      navigation.reset({
        routes: [{name: 'PermissionsScreen'}],
      });
    }
  }, [locationStatus, navigation]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      console.log('AppState', nextAppState);
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return children;
};
