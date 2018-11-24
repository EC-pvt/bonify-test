import React from 'react';
import { shallow } from 'enzyme';
import Video from './index';
import { Tile } from './styles';

const mockedVideos = [
  {
    id: 'dq872PEfhxE',
    title: 'Raphael Jesse from Das Trainingslager : Balance moves',
  },
  {
    id: 'R_NE_I-x8fs',
    title: 'U2 - BLACKOUT live from Berlin 13.11.2018',
  },
  {
    id: 'Q5Wh_LjPjck',
    title:
      'تشيّع مدينة طرابلس الجمعة، أسامة حبلص، نجل إمام مسجد الرحمن الشيخ محمد حبلص، والذي قضى عصر الخميس بح',
  },
  {
    id: 'p_bDjNqvZAU',
    title: 'Welcome to Berlin (Alternate)',
  },
  {
    id: 'co0UEpksrMY',
    title: 'Mercedes Benz GLA Führerstandsmitfahrt Rhinstr bis magdalenenstr',
  },
];

test('IF we provide array of videos of n length, THEN Video renders n Tiles of videos', () => {
  const wrapper = shallow(<Video videos={mockedVideos} />);
  expect(wrapper.find(Tile)).toHaveLength(mockedVideos.length);
});
