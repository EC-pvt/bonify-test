import React from 'react';
import PropTypes from 'prop-types';
import { HomeWrapper, Title } from './styles';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = (e) => {
    this.setState({ address: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { address } = this.state;
    const { addLocation } = this.props;
    console.log(address);
    addLocation(address);
  };

  handleChangeLocation = (e) => {
    const { changeLocation } = this.props;
    changeLocation(e.target.dataset.direction);
  };

  render() {
    const { address } = this.state;
    const { locations, videos, error } = this.props;
    return (
      <HomeWrapper>
        <Title>Map cose</Title>
        <form onSubmit={this.handleSubmit}>
          <input className="input" type="text" value={address} onChange={this.handleChange} />
          <button type="submit" className="button">
            Search
          </button>
        </form>
        <h3>{`Locations: ${locations.map((el) => `${el.address}, `)}`}</h3>
        <h3>{`Videos: ${videos.map((el) => el.title)}`}</h3>
        <button type="button" data-direction="prev" onClick={this.handleChangeLocation}>
          prev
        </button>
        <button type="button" data-direction="next" onClick={this.handleChangeLocation}>
          next
        </button>
        <h3>{error}</h3>
      </HomeWrapper>
    );
  }
}

Home.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addLocation: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Home;
