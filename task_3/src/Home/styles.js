import styled from 'styled-components';

const whiteText = '#fafafa';

const HomeWrapper = styled.div`
  padding: 0 10%;
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    '. title title .'
    'prev map video next';
  grid-template-columns: 80px 1fr 1fr 80px;
  @media screen and (max-width: 767px) {
    grid-template-areas:
      'prev title title next'
      'map map map map'
      'video video video video';
    grid-template-columns: 50px 1fr 1fr 50px;
  }
`;

const Title = styled.h1`
  grid-area: title;
  text-align: center;
  color: ${whiteText};
`;

const MapContainer = styled.div`
  grid-area: map;
`;

const VideoContainer = styled.div`
  grid-area: video;
`;

const NavButton = styled.button`
  background: transparent;
  border: 3px solid ${whiteText};
  color: ${whiteText};
  border-radius: 50%;
  cursor: pointer;
  font-size: 2rem;
  opacity: 0.5;
  transition: opacity 0.3s;
  margin-top: 30px;
  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: 0;
  }
`;

const NavPrev = styled.div`
  grid-area: prev;
`;
const NavNext = styled.div`
  justify-self: end;
  grid-area: next;
`;

export { HomeWrapper, Title, MapContainer, VideoContainer, NavButton, NavPrev, NavNext };
