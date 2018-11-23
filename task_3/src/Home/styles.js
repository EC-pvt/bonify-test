import styled from 'styled-components';

const whiteText = '#fafafa';
//const error = 'red';

const HomeWrapper = styled.div`
  padding: 0 10%;
  display: grid;
  grid-gap: 30px;
  grid-template-areas:
    'title title'
    'map video';
  grid-template-columns: 50% 50%;
`;

const Title = styled.h1`
  grid-area: title;
  text-align: center;
  color: ${whiteText};
`;

const MapContainer = styled.div`
  grid-area: map;
`;

const ActiveLocation = styled.h3`
  color: #fafafa;
`;

const HistoryContainer = styled.div`
  margin-top: 30px;
`;
const HistoryTable = styled.div`
  background: #fafafa;
  border: 1px solid #777;
  border-radius: 3px;
`;
const HistoryTile = styled.h3`
  padding: 30px;
  margin: 0;
  border-bottom: 1px solid #777;
  background: ${(props) => (props.active ? '#6DD5FA' : 'transparent')};
`;

const VideoTable = styled.div`
  grid-area: video;
`;

const NavButton = styled.div`
  grid-area: video;
`;

export {
  HomeWrapper,
  Title,
  MapContainer,
  ActiveLocation,
  HistoryContainer,
  HistoryTable,
  HistoryTile,
  VideoTable,
  NavButton,
};
