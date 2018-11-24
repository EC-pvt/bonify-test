import React from 'react';
import PropTypes from 'prop-types';
import { Tile, VideoContainer, VideoTitle } from './styles';

class Video extends React.PureComponent {
  render() {
    const { videos } = this.props;
    return (
      <VideoContainer>
        {videos.map((video, i) => (
          <Tile key={i}>
            <VideoTitle>{video.title}</VideoTitle>
            <iframe
              title={video.title}
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </Tile>
        ))}
      </VideoContainer>
    );
  }
}

Video.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Video;
