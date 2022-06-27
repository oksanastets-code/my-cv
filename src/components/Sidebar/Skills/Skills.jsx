import styled from 'styled-components';

import { SkillItem } from './SkillItem';

export const Skills = ({ items }) => (
  <SkillsBlock>
    <ul>
      {items.map(item => (
        <Block key={item.id}>
          <SkillItem title={item.title} stack={item.stack} />
        </Block>
      ))}
    </ul>
  </SkillsBlock>
);
const SkillsBlock = styled.div`
  padding: 50px 0;
`
const Block = styled.li`
   &:not(:last-child) {
    margin-bottom: 50px;
  }
`;
