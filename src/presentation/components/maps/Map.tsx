import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Location} from '../../../infrastucture/interfaces/location';
import {getCurrentLocation} from '../../../actions/location/location';
interface Marker {
  showUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ({showUserLocation = true, initialLocation}: Marker) => {
  getCurrentLocation().then(location => {
    console.log(location);
  });
  return (
    <>
      <MapView
        showsUserLocation={showUserLocation}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {/* este es un marcador */}
        {/* <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Hello"
          description="World"
          image={require('../../../assets/custom-marker.png')}
        /> */}
      </MapView>
    </>
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
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
