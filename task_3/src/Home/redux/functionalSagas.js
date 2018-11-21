import { put, select } from 'redux-saga/effects';
import api from 'api';
import actions from 'reduxUtils/actions';

export function* addLocationRequest(payload) {
  yield put(actions.HOME.ADD_LOCATION_REQUEST.create());
  const { data, error } = yield api.getCoordinates(payload);
  if (data && data.status === 'OK') {
    const result = data.results.reduce(
      (acc, curr) =>
        acc.concat({
          address: curr.formatted_address,
          coordinates: curr.geometry.location,
        }),
      []
    );
    const locations = yield select((state) => state.home.locations);
    const updatedLocations = locations
      .concat(result)
      .map((location) => ({ ...location, active: false }));
    updatedLocations[updatedLocations.length - 1].active = true;
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
