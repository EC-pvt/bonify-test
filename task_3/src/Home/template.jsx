import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './Map/GoogleMap';
import VideoTile from './Video/VideoTile';
import {
  HomeWrapper,
  Title,
  MapContainer,
  ActiveLocation,
  HistoryContainer,
  HistoryTable,
  HistoryTile,
  VideoTable,
  NavButton,
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
          <MapContainer>
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
              <HistoryTable>
                {locations
                  .slice()
                  .reverse()
                  .map((el, i) => (
                    <HistoryTile key={i} active={el.active}>
                      {el.address}
                    </HistoryTile>
                  ))}
              </HistoryTable>
            </HistoryContainer>
          </MapContainer>

          <VideoTable>
            {videos.map((el, i) => (
              <VideoTile key={i} video={el} />
            ))}
          </VideoTable>

          <h3>{error}</h3>
        </HomeWrapper>
        <NavButton type="button" data-direction="prev" onClick={this.handleChangeLocation}>
          Previous Location
        </NavButton>
        <NavButton type="button" data-direction="next" onClick={this.handleChangeLocation}>
          Next Location
        </NavButton>
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
