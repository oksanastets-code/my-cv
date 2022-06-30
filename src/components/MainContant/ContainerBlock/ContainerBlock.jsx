import styled from 'styled-components';

export const ContainerBlock = ({ name, children }) => {
  return (
    <ContainerBl case={name}>
      <BlockTitle>{name}</BlockTitle>
      {children}
    </ContainerBl>
  );
};

const ContainerBl = styled.div`
  /* border-bottom: 2px solid ${p => p.theme.colors.secondary}; */

  ${props => {
    switch (props.case) {
      case 'Education':
        return `
          border-bottom: none;
          padding: 16px 0 0;
        `;
      default:
        return `
         border-bottom: 2px solid #fb6d3a;
         padding: 16px 0;
        `;
    }
  }}
`;

const BlockTitle = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 27px;
  color: ${p => p.theme.colors.title};
  margin-bottom: 10px;
`;
