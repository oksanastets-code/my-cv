import styled from 'styled-components';

import { ContainerBlock } from '../ContainerBlock';
import { WorkItem } from './WorkItem';

export const WorkList = ({ items }) => {
  return (
    <ContainerBlock name = {'Work experience'}>
      <ul>
        {items.map(item => (
          <WorkBlock key={item.id}>
            <WorkItem
              job={item.job}
              company={item.company}
              period={item.period}
              place={item.place}
              duties={item.duties}
            />
          </WorkBlock>
        ))}
      </ul>
    </ContainerBlock>
  );
};
const WorkBlock = styled.li`
  &:not(:last-child) {
    margin-bottom: 22px;
  }
`