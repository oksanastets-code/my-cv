import styled from 'styled-components';

import { SkillItem } from './SkillItem';

export const Skills = ({ items }) => (
  <>
    <ul>
      {items.map(item => (
        <SkillsBlock key={item.id}>
          <SkillItem title={item.title} stack={item.stack} />
        </SkillsBlock>
      ))}
    </ul>
  </>
);
const SkillsBlock = styled.li`
  margin-bottom: 50px;
`;
