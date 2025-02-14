import {Platform} from 'react-native';
import {
  openSettings,
  PERMISSIONS,
  request,
  PermissionStatus as RNPermisionStatus,
  check,
} from 'react-native-permissions';
import type {PermissionStatus} from '../../infrastucture/interfaces/permissions';

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    let status: RNPermisionStatus = 'unavailable';

    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Unsuported platform');
    }

    if (status === 'blocked') {
      await openSettings();
    }

    const permissionMapper: Record<RNPermisionStatus, PermissionStatus> = {
      granted: 'granted',
      denied: 'denied',
      blocked: 'blocked',
      unavailable: 'unavailable',
      limited: 'limited',
    };

    return permissionMapper[status] ?? 'unavailable';
  };

export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPermisionStatus = 'unavailable';

  if (Platform.OS === 'ios') {
    status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Unsuported platform');
  }

  const permissionMapper: Record<RNPermisionStatus, PermissionStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'blocked',
    unavailable: 'unavailable',
    limited: 'limited',
  };

  return permissionMapper[status] ?? 'unavailable';
};
