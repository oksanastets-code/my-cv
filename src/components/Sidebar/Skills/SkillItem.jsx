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
  margin: 50px 40px 0 40px;
  color: #ffffff;
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
  color: #fb6d3a;
`;
const ItemText = styled.span`
  color: white;
`;
