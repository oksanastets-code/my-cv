import styled from 'styled-components';

import Media from 'react-media';
import { breakpoints } from 'constants/breakpoints';

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
      <Media query={breakpoints.desktop} render={() => <Intro />} />
      <ProjectList items={projects} />
      <WorkList items={work} />
      <Education items={education} />
    </MainContantSection>
  );
};

const MainContantSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 80px 40px;
  }
`;
