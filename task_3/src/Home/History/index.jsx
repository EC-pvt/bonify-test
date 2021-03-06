import React from 'react';
import PropTypes from 'prop-types';
import { HistoryContainer, Error, HistoryTable, HistoryTile } from './styles';

class History extends React.PureComponent {
  render() {
    const { locations, error, activeLocation } = this.props;
    return (
      <HistoryContainer>
        {!!error && <Error>{`Error from the Google guys, the say: ${error}`}</Error>}
        <p>Locations: </p>
        <HistoryTable>
          {locations
            .slice()
            .reverse()
            .map((el, i) => (
              <HistoryTile
                key={i}
                active={
                  el.coordinates.lat === activeLocation.coordinates.lat &&
                  el.coordinates.lng === activeLocation.coordinates.lng
                }
              >
                {el.address}
              </HistoryTile>
            ))}
        </HistoryTable>
      </HistoryContainer>
    );
  }
}
History.propTypes = {
  locations: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  activeLocation: PropTypes.object.isRequired,
};

export default History;
