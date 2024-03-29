import styled from 'styled-components';

export const SkillItem = ({ title, stack }) => (
  <Block>
    <Title>{title}</Title>
    <List>
      {stack.map((item, index) => (
        <Item key={index}>
          <ItemText>{item}</ItemText>
        </Item>
      ))}
    </List>
  </Block>
);
const Block = styled.div`
`;
const Title = styled.h3`
  font-size: 22px;
  /* font-size: 160px; */
  line-height: 1.23;
  margin-bottom: 10px;
  /* text-align: center; */
  text-align: start;

   @media screen and (min-width: 1280px) {
     font-size: 22px;
  }
`;
const List = styled.ul`
  list-style: initial;
  list-style-position: inside;
`;
const Item = styled.li`
  font-size: 14px;
  line-height: 1.71;
  color: ${p => p.theme.colors.secondary};
`;
const ItemText = styled.span`
  color: ${p => p.theme.colors.textSidebar};
`;
