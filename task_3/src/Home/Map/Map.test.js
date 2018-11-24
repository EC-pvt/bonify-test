import React from 'react';
import { shallow } from 'enzyme';
import GoogleMap from './index';
import { Marker } from './styles';

const defaultProps = {
  center: {},
  onAddLocation: jest.fn(),
};

const mockedLocations = {
  locations: [
    {
      address: 'Südliche Innenstadt, Potsdam, Germania',
      coordinates: {
        lat: 52.3923234,
        lng: 13.0725659,
      },
      active: false,
    },
    {
      address: '10117 Berlino, Germania',
      coordinates: {
        lat: 52.5155098,
        lng: 13.3847539,
      },
      active: false,
    },
    {
      address: '15230 Francoforte, Germania',
      coordinates: {
        lat: 52.3367474,
        lng: 14.5552348,
      },
      active: true,
    },
  ],
};

test('IF we provide array of locations of n length, THEN GoogleMap renders n Markers on the map', () => {
  const props = { ...defaultProps, ...mockedLocations };
  const wrapper = shallow(<GoogleMap {...props} />);
  expect(wrapper.find(Marker)).toHaveLength(mockedLocations.locations.length);
});
