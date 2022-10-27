import styled from 'styled-components';

export const Container = ({ children }) => (
  <MainContainer>{children}</MainContainer>
);

// A4 | 297 x 210 mm | 3508 x 2480 px
const MainContainer = styled.div`
  display: flex;
  width: 1240px;
  height: 1754px;
  flex-direction: row;
  background: #fff;
`;
