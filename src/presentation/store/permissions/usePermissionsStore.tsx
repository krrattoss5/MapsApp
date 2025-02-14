import {create} from 'zustand';
import {PermissionStatus} from '../../../infrastucture/interfaces/permissions';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../../actions/permissiones/location';

interface PermissionsState {
  locationStatus: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}

export const usePermissionsStore = create<PermissionsState>()(set => ({
  locationStatus: 'unavailable',

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({locationStatus: status});
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({locationStatus: status});
    return status;
  },
}));
