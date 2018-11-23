import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const Marker = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: linear-gradient(to right, #16a085, #f4d03f);
  border: 2px solid #6dd5ed;
`;

export { MapContainer, Marker };
