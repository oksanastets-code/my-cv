import styled from 'styled-components';
import sprite from '../../../img/sprite.svg';

export const ContactBlock = ({ items }) => {
  return (
    <Block>
      <Title>Contacts</Title>
      <ul>
        {items.map(item => (
          <ContactItem key={item.id}>
            {!item.address ? (
              <Link href={item.href}>
                <Icon width="16" height="1rem">
                  <use href={`${sprite}` + item.icon}></use>
                </Icon>
                {item.point}
              </Link>
            ) : (
              <Address>
                <Link href={item.href}>
                  <Icon width="16" height="1rem">
                    <use href={`${sprite}` + item.icon}></use>
                  </Icon>
                  {item.point}
                </Link>
              </Address>
            )}
          </ContactItem>
        ))}
      </ul>
    </Block>
  );
};

const Block = styled.div``;
const Title = styled.h3`
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 10px;
`;
const ContactItem = styled.li`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
`;
const Icon = styled.svg`
  fill: ${p => p.theme.colors.secondary};
  margin-right: 10px;
`;
const Address = styled.address`
  font-style: normal;
`
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  &:hover {
  color: ${p => p.theme.colors.secondary};
  }
`