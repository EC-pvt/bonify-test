import styled from 'styled-components';

const whiteText = '#fafafa';

const HistoryContainer = styled.div`
  margin-top: 30px;
  & > p {
    color: ${whiteText};
  }
`;
const HistoryTable = styled.div`
  background: silver;
  border: 1px solid #777;
  border-radius: 3px;
`;
const HistoryTile = styled.h3`
  padding: 30px;
  margin: 0;
  border-bottom: 1px solid #777;
  background: ${(props) => (props.active ? whiteText : 'transparent')};
`;

const Error = styled.h4`
  color: red;
  font-size: 1.2rem;
`;

export { HistoryContainer, HistoryTable, HistoryTile, Error };
