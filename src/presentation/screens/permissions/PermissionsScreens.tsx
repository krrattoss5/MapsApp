import React from 'react';
import {Text, View, Pressable} from 'react-native';
import globalStyles from '../../../config/theme/styles';
import {usePermissionsStore} from '../../store/permissions/usePermissionsStore';
export const PermissionsScreen = () => {
  const {locationStatus, requestLocationPermission} = usePermissionsStore();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Habilitar Ubicación
      </Text>

      <Pressable
        style={globalStyles.button}
        onPress={requestLocationPermission}>
        <Text style={globalStyles.buttonText}>Habilitar Ubicación</Text>
      </Pressable>

      <Text style={{marginTop: 20}}>Estado actual: {locationStatus}</Text>
    </View>
  );
};
