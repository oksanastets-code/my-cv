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
  width: 100%;
  margin-top: 10px;
  /* padding: 50px 0; */
`
const SkillsList = styled.ul`
  display: flex;
  justify-content: space-around;
   flex-direction: column;
`
const Block = styled.li`
  width: 100%;
  margin-bottom: 70px;
  /* &:not(:last-child) {
   margin-bottom: 80px;
 } */
`;
