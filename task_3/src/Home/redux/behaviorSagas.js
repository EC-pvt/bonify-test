import { call, put, select, takeEvery } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { addLocationRequest, changeLocationRequest, getVideosRequest } from './functionalSagas';

function* addLocation({ payload }) {
  try {
    yield call(addLocationRequest, payload);
    const locations = yield select((state) => state.home.locations);
    const activeLocation = locations.filter((location) => location.active);
    yield call(getVideosRequest, activeLocation.shift());
    yield put(actions.HOME.ADD_LOCATION_SUCCESS.create());
  } catch (err) {
    yield put(actions.HOME.ADD_LOCATION_ERROR.create());
  }
}

function* changeLocation(payload) {
  try {
    yield call(changeLocationRequest, payload);
    const locations = yield select((state) => state.home.locations);
    const activeLocation = locations.filter((location) => location.active);
    yield call(getVideosRequest, activeLocation.shift());
    yield put(actions.HOME.CHANGE_LOCATION_SUCCESS.create());
  } catch (err) {
    yield put(actions.HOME.CHANGE_LOCATION_ERROR.create(err));
  }
}

export default function* HomeSaga() {
  yield takeEvery(actions.HOME.ADD_LOCATION.type, addLocation);
  yield takeEvery(actions.HOME.CHANGE_LOCATION.type, changeLocation);
}
