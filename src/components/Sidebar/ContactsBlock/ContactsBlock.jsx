import styled from 'styled-components';
import sprite from '../../../img/sprite.svg';

export const ContactBlock = ({ items }) => (
  <Block>
    <Title>Contacts</Title>
    <ul>
      {items.map(item => (
        <ContactItem key={item.id}>
          <a href={item.href}>
            <Icon width="16" height="1rem">
              <use href={`${sprite}{item.icon}`}></use>
            </Icon>
            {item.address}
          </a>
        </ContactItem>
      ))}
    </ul>
    <address>
      {/* <svg>
        <use href="../img/sprite.svg#icon-icon-location"></use>
      </svg> */}
      Lviv, Ukraine
    </address>
  </Block>
);

const Block = styled.div`
margin-top: 50px;
margin-bottom: 50px;
`;
const Title = styled.h3`
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 10px;
`;
const ContactItem = styled.li`
   display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
`
const Icon = styled.svg`
  fill: ${p => p.theme.colors.secondary};
`