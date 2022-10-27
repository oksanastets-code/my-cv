import styled from 'styled-components';

import { ContainerBlock } from '../ContainerBlock';
import { EducationItem } from './EducationItem';

export const Education = ({ items }) => (
  <>
    <ContainerBlock name={'Education'}>
      <ul>
        {items.map(
          item =>
            item.id === '2' && (
              <EduBlock key={item.id}>
                <EducationItem
                  school={item.school}
                  qualification={item.qualification}
                  period={item.period}
                  place={item.place}
                />
              </EduBlock>
            )
        )}
      </ul>
    </ContainerBlock>
    <ContainerBlock name={'Courses'}>
       <ul>
      {items.map(
        item =>
          item.id === '1' && (
            <EduBlock key={item.id}>
              <EducationItem
                school={item.school}
                qualification={item.qualification}
                period={item.period}
                place={item.place}
              />
            </EduBlock>
          )
      )}
        </ul>
    </ContainerBlock>
  </>
);
const EduBlock = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
