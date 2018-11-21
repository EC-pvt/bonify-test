//connection
import { connect } from 'react-redux';
import actions from 'reduxUtils/actions';
import Home from './template';

const homeActions = actions.HOME;
const mapDispatchToProps = (dispatch) => ({
  addLocation: (address) => dispatch(homeActions.ADD_LOCATION.create(address)),
  changeLocation: (direction) => dispatch(homeActions.CHANGE_LOCATION.create(direction)),
});

const mapStateToProps = (state) => ({
  locations: state.home.locations,
  videos: state.home.videos,
  error: state.home.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
