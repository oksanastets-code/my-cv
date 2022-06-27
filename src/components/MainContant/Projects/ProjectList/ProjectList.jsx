import styled from 'styled-components';

import { ContainerBlock } from '../../ContainerBlock';
import { Project } from '../Project/Project';

export const ProjectList = ({ name, items }) => {
  // const { id, type, deployLink, name, period, stack, descr, note, codeLink } =
  //   items;

  return (
    <ContainerBlock name={'Project experience'}>
      <ul>
        {items.map(item => (
          <ProjectItem key={item.id}>
            <Project
              type={item.type}
              deployLink={item.deployLink}
              name={item.name}
              period={item.period}
              stack={item.stack}
              descr={item.descr}
              note={item.note}
              codeLink={item.codeLink}
            />
          </ProjectItem>
        ))}
      </ul>
    </ContainerBlock>
  );
};

const ProjectItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 22px;
  }
`;
