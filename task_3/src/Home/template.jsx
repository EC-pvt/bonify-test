import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './Map/GoogleMap';
import {
  HomeWrapper,
  Title,
  ActiveLocation,
  HistoryContainer,
  HistoryTile,
  VideoTable,
  VideoTile,
} from './styles';

class Home extends React.PureComponent {
  handleAddLocation = (e) => {
    const { addLocation } = this.props;
    addLocation({ lat: e.lat, lng: e.lng });
  };

  handleChangeLocation = (e) => {
    const { changeLocation } = this.props;
    changeLocation(e.target.dataset.direction);
  };

  getActiveLocation = (locations) => locations.find((location) => location.active);

  render() {
    const { locations, videos, error } = this.props;
    const activeLocation = this.getActiveLocation(locations);
    return (
      <React.Fragment>
        <HomeWrapper>
          <Title>Map cose</Title>

          <GoogleMap
            locations={locations}
            center={
              activeLocation
                ? { lat: activeLocation.coordinates.lat, lng: activeLocation.coordinates.lng }
                : {
                    lat: 52.5,
                    lng: 13.4,
                  }
            }
            onAddLocation={this.handleAddLocation}
          />
          <ActiveLocation>
            {`Active Location: ${activeLocation ? activeLocation.address : ''}`}
          </ActiveLocation>

          <HistoryContainer>
            <p>Locations: </p>
            {locations.map((el) => (
              <HistoryTile>{el.address}</HistoryTile>
            ))}
          </HistoryContainer>

          <VideoTable>
            {videos.map((el) => (
              <VideoTile video={el} />
            ))}
          </VideoTable>

          <h3>{error}</h3>
        </HomeWrapper>
        <button type="button" data-direction="prev" onClick={this.handleChangeLocation}>
          Previous Location
        </button>
        <button type="button" data-direction="next" onClick={this.handleChangeLocation}>
          Next Location
        </button>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  locations: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired,
  addLocation: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Home;
