import styled from 'styled-components';

import { Intro } from '../MainContant/Intro/Intro';
import { ProjectList } from '../MainContant/Projects/ProjectList/ProjectList';
import { WorkList } from '../MainContant/WorkList/Worklist';
import { Education } from '../MainContant/Education/Education';

import projects from '../../data/projects.json';
import work from '../../data/work.json';
import education from '../../data/education.json';

export const MainContant = () => {
  return (
    <MainContantSection>
      <Intro />
      <ProjectList items={projects} />
      <WorkList items={work} />
      <Education items={education} />
    </MainContantSection>
  );
};

const MainContantSection = styled.div`
  padding: 10px 80px 0;
`;
