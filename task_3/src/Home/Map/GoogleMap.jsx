import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { MapContainer, Marker } from './styles';

class GoogleMap extends React.PureComponent {
  renderMarkers = () => {
    const { locations } = this.props;
    return locations.map((location, index) => (
      <Marker key={index} lat={location.coordinates.lat} lng={location.coordinates.lng} />
    ));
  };

  render() {
    const { center, onAddLocation } = this.props;
    return (
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAictc5WPN8U5eH1m4P7vbPRIvAy6jDSHU' }}
          center={center}
          defaultZoom={8}
          onClick={onAddLocation}
        >
          {this.renderMarkers()}
        </GoogleMapReact>
      </MapContainer>
    );
  }
}

GoogleMap.propTypes = {
  center: PropTypes.object.isRequired,
  onAddLocation: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default GoogleMap;
