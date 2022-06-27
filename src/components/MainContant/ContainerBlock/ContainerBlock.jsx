import styled from 'styled-components';

export const ContainerBlock = ({ name, children }) => {
  return (
    <ContainerBl>
      <BlockTitle>{name}</BlockTitle>
      {children}
    </ContainerBl>
  );
};

const ContainerBl = styled.div`
  padding: 16px 0;
  border-bottom: 2px solid ${p => p.theme.colors.secondary};
`;
const BlockTitle = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 27px;
  color: ${p => p.theme.colors.title};
  margin-bottom: 10px;
`;
