import styled from 'styled-components';

import { SkillItem } from './SkillItem';

export const Skills = ({ items }) => (
  <SkillsBlock>
    <SkillsList>
      {items.map(item => (
        <Block key={item.id}>
          <SkillItem title={item.title} stack={item.stack} />
        </Block>
      ))}
    </SkillsList>
  </SkillsBlock>
);
const SkillsBlock = styled.div`
  order: 2;
  width: 100%;
  margin-top: 10px;
  @media screen and (min-width: 1280px) {
    order: 1;
  }
  /* padding: 50px 0; */
`
const SkillsList = styled.ul`
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 1280px) {
   flex-direction: column;
  }
`
const Block = styled.li`
width: 50%;
@media screen and (min-width: 1280px) {
  width: 100%;
  /* &:not(:last-child) {
   margin-bottom: 80px;
 } */
  }
`;
