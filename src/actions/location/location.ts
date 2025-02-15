import Geolocation from '@react-native-community/geolocation';
import {Location} from '../../infrastucture/interfaces/location';

export const getCurrentLocation = async (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => {
        resolve({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => {
        console.log('Error al obtener la ubicación', error);

        reject(error);
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
};
