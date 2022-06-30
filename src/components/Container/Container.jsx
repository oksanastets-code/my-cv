import styled from 'styled-components';

export const Container = ({ children }) => (
  <MainContainer>{children}</MainContainer>
);

const MainContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 1200px;
  height: 1760px;
  background: #fff;
`;
