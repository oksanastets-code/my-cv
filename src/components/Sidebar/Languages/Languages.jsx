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
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 10px;
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