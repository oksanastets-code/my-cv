import styled from 'styled-components';

export const Languages = ({ title, stack }) => (
  <Block>
    <Title>{title}</Title>
    <List>
      {stack.map(item => (
        <Item key={item.lang}>
          <ItemText>{item.lang}</ItemText>
          <span>&ensp;&ndash;&ensp;</span>
          <ItemText>{item.level}</ItemText>
        </Item>
      ))}
    </List>
  </Block>
);
const Block = styled.div`

order: 0;
@media screen and (min-width: 1280px) {
  order: 3;
}
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
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.secondary};
@media screen and (min-width: 1280px) {
    font-size: 14px;
    line-height: 1.71;
  }
`;
const ItemText = styled.span`
  color: ${p => p.theme.colors.textSidebar};
`;