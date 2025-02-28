import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {Location} from '../../../infrastucture/interfaces/location';
import {FAB} from '../ui/FAB';
import useLocationStore from '../../store/location/UseLocationStore';
interface Marker {
  showUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ({showUserLocation = true, initialLocation}: Marker) => {
  const mapRef = useRef<MapView>();
  const [isFollowingUser, setIsFollowingUser] = useState(true);
  const cameraRef = useRef<Location>(initialLocation);
  const {
    getLocation,
    lastKnownLocation,
    watchLocation,
    clearWatchLocation,
    userLocationList,
  } = useLocationStore();

  const moveCamaraToLocation = (location: Location) => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.animateCamera({center: location});
  };

  const moveToCurrentLocation = async () => {
    if (!lastKnownLocation) {
      moveCamaraToLocation(initialLocation);
    }
    const location = await getLocation();
    if (!location) {
      return;
    }
    moveCamaraToLocation(location);
  };

  useEffect(() => {
    watchLocation();

    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCamaraToLocation(lastKnownLocation);
    }
  }, [lastKnownLocation, isFollowingUser]);

  return (
    <>
      <MapView
        ref={map => (mapRef.current = map!)}
        showsUserLocation={showUserLocation}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onTouchStart={() => setIsFollowingUser(false)}
        region={{
          latitude: cameraRef.current.latitude,
          longitude: cameraRef.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>

        <Polyline
          coordinates={userLocationList}
          strokeColor="violet"
          strokeWidth={5}
        />

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

      <FAB
        iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={{
          bottom: 80,
          right: 20,
        }}
      />
      <FAB
        iconName="compass-outline"
        onPress={moveToCurrentLocation}
        style={{
          bottom: 20,
          right: 20,
        }}
      />
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
