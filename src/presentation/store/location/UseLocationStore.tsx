import {create} from 'zustand';
import {Location} from '../../../infrastucture/interfaces/location';
import {
  clearWatchLocation,
  getCurrentLocation,
  watchCurrentLocation,
} from '../../../actions/location/location';

interface LocationState {
  lastKnownLocation: Location | null;
  watchId: number | null;
  userLocationList: Location[];

  getLocation: () => Promise<Location | null>;
  watchLocation: () => void;
  clearWatchLocation: () => void;
}

const useLocationStore = create<LocationState>()((set, get) => ({
  lastKnownLocation: null,
  watchId: null,
  userLocationList: [],

  getLocation: async () => {
    const location = await getCurrentLocation();
    set({lastKnownLocation: location});
    return location;
  },

  watchLocation: () => {
    const watchId = get().watchId;
    if (watchId) {
      get().clearWatchLocation();
    }

    const id = watchCurrentLocation(location => {
      set({
        lastKnownLocation: location,
        userLocationList: [...get().userLocationList, location],
      });
    });

    set({watchId: id});
  },

  clearWatchLocation: () => {
    const watchId = get().watchId;
    if (watchId) {
      clearWatchLocation(watchId);
    }
  },
}));

export default useLocationStore;
