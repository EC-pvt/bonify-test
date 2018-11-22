import { put, select } from 'redux-saga/effects';
import api from 'api';
import actions from 'reduxUtils/actions';

const findApproxAddress = (addresses) => {
  const firstApprox = addresses.find((address) => address.geometry.location_type === 'APPROXIMATE');
  return firstApprox
    ? {
        address: firstApprox.formatted_address,
        coordinates: firstApprox.geometry.location,
        active: true,
      }
    : {
        address: addresses[0].formatted_address,
        coordinates: addresses[0].geometry.location,
        active: true,
      };
};

export function* addLocationRequest(payload) {
  yield put(actions.HOME.ADD_LOCATION_REQUEST.create());
  const { data, error } = yield api.getAddress(payload);
  if (data && data.status === 'OK') {
    const newLocation = findApproxAddress(data.results);
    const locations = yield select((state) => state.home.locations);
    const updatedLocations = locations
      .map((location) => ({ ...location, active: false }))
      .concat(newLocation);
    yield put(actions.HOME.ADD_LOCATION_REQUEST_SUCCESS.create(updatedLocations));
  } else {
    yield put(actions.HOME.ADD_LOCATION_REQUEST_ERROR.create(data.status || error));
    throw data.status || error;
  }
}

export function* changeLocationRequest({ payload }) {
  yield put(actions.HOME.CHANGE_LOCATION_REQUEST.create());
  const locations = yield select((state) => state.home.locations);
  const activeLocationIndex = locations.findIndex((location) => location.active);
  if (payload === 'prev' && activeLocationIndex > 0) {
    locations[activeLocationIndex].active = false;
    locations[activeLocationIndex - 1].active = true;
  }
  if (payload === 'next' && activeLocationIndex < locations.length - 1) {
    locations[activeLocationIndex].active = false;
    locations[activeLocationIndex + 1].active = true;
  }
  yield put(actions.HOME.CHANGE_LOCATION_REQUEST_SUCCESS.create(locations));
}

export function* getVideosRequest(payload) {
  yield put(actions.HOME.GET_VIDEOS_REQUEST.create());
  const { data, error } = yield api.getVideos(payload.coordinates);
  if (data) {
    const videos = data.items.map((video) => ({
      id: video.id.videoId,
      thumbnail: video.snippet.thumbnails.high.url,
      title: video.snippet.title,
    }));
    yield put(actions.HOME.GET_VIDEOS_REQUEST_SUCCESS.create(videos));
  }
  if (error) {
    yield put(actions.HOME.GET_VIDEOS_REQUEST_ERROR.create(error));
  }
}
