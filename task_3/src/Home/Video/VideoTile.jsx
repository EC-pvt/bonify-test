import React from 'react';
import PropTypes from 'prop-types';
import { Tile, VideoContainer, VideoTitle } from './styles';

class GoogleMap extends React.PureComponent {
  render() {
    const { video } = this.props;
    return (
      <Tile>
        <VideoContainer>
          <VideoTitle>{video.title}</VideoTitle>
          <iframe
            title={video.title}
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </VideoContainer>
      </Tile>
    );
  }
}

GoogleMap.propTypes = {
  video: PropTypes.object.isRequired,
};

export default GoogleMap;
