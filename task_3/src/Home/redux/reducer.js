import actions from 'reduxUtils/actions';

const homeActions = actions.HOME;

const initialState = {
  locations: [],
  videos: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case homeActions.ADD_LOCATION_REQUEST_SUCCESS.type:
      return { ...state, locations: action.payload, error: '' };
    case homeActions.ADD_LOCATION_REQUEST_ERROR.type:
      return { ...state, error: action.payload };
    case homeActions.CHANGE_LOCATION_REQUEST_SUCCESS.type:
      return { ...state, locations: action.payload };
    case homeActions.GET_VIDEOS_REQUEST_SUCCESS.type:
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};

export { initialState };
