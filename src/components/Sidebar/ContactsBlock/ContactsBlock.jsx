import styled from 'styled-components';
import sprite from '../../../img/sprite.svg';

import Media from 'react-media';
import { breakpoints } from 'constants/breakpoints';

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
                 <Media
          query={breakpoints.desktop}
          render={() => (<Address>
                <Link href={item.href}>
                  <Icon width="16" height="1rem">
                    <use href={`${sprite}` + item.icon}></use>
                  </Icon>
                  {item.point}
                </Link>
              </Address>
          )}
        />
              
            )}
          </ContactItem>
        ))}
      </ul>
    </Block>
  );
};

const Block = styled.div`
order: 0;
 @media screen and (min-width: 1280px) {
    margin-bottom: 70px;
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
    text-align: start;
  }
`;
const ContactItem = styled.li`
&:not(:last-child) {
   margin-bottom: 8px;
 }
  font-size: 16px;
  line-height: 1.5;

  @media screen and (min-width: 1280px) {
    /* font-size: 16px;
    text-align: start; */
  }
`;
const Icon = styled.svg`
  fill: ${p => p.theme.colors.secondary};
  margin-right: 10px;
`;
const Address = styled.address`
  font-style: normal;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  &:hover {
    color: ${p => p.theme.colors.secondary};
  }
`;
