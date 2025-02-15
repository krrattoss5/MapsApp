import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Map} from '../../components/maps/Map';

export const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Map initialLocation={{latitude: 37.78825, longitude: -122.4324}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});
