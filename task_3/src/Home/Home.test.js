import React from 'react';
import { shallow } from 'enzyme';
import Home from './template';
import { initialState } from './redux/reducer';

const defaultProps = {
  ...initialState,
  addLocation: jest.fn(),
  changeLocation: jest.fn(),
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

test('IF we provide array of locations, THEN getActiveLocation gives us the one with key active===true', () => {
  const props = { ...defaultProps, ...mockedLocations };
  const wrapper = shallow(<Home {...props} />);
  const activeLocation = wrapper.instance().getActiveLocation(wrapper.instance().props.locations);
  expect(activeLocation).toEqual({
    address: '15230 Francoforte, Germania',
    coordinates: {
      lat: 52.3367474,
      lng: 14.5552348,
    },
    active: true,
  });
});
