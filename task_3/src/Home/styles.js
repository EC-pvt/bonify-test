import styled from 'styled-components';

const whiteText = '#fafafa';
//const error = 'red';

const HomeWrapper = styled.div`
  padding: 0 10%;
  display: grid;
  grid-gap: 30px;
  grid-template-areas:
    'title title'
    'map video'
    'current video'
    'history video';
`;

const Title = styled.h1`
  grid-area: title;
  color: ${whiteText};
`;

const ActiveLocation = styled.h3`
  grid-area: current;
  color: ${whiteText};
`;

const HistoryContainer = styled.div`
  grid-area: history;
`;
const HistoryTile = styled.div`
  text-align: center;
`;
const VideoTable = styled.div`
  grid-area: video;
`;
const VideoTile = styled.div`
  text-align: center;
`;

export { HomeWrapper, Title, ActiveLocation, HistoryContainer, HistoryTile, VideoTable, VideoTile };
