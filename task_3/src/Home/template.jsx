import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './Map';
import Video from './Video';
import History from './History';
import {
  HomeWrapper,
  Title,
  MapContainer,
  VideoContainer,
  NavButton,
  NavPrev,
  NavNext,
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
      <HomeWrapper>
        <Title>Latest YouTube videos by location</Title>
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
          <History error={error} locations={locations} getActiveLocation={this.getActiveLocation} />
        </MapContainer>

        <VideoContainer>
          <Video videos={videos} />
        </VideoContainer>

        <NavPrev>
          <NavButton type="button" data-direction="prev" onClick={this.handleChangeLocation}>
            ←
          </NavButton>
        </NavPrev>
        <NavNext>
          <NavButton type="button" data-direction="next" onClick={this.handleChangeLocation}>
            →
          </NavButton>
        </NavNext>
      </HomeWrapper>
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
