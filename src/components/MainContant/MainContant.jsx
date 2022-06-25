import { Intro } from '../MainContant/Intro/Intro';
import { ProjectList } from '../MainContant/Projects/ProjectList/ProjectList';
import projects from '../../data/projects.json';
import { WorkList } from '../MainContant/WorkList/Worklist';
import work from '../../data/work.json';
import { Education } from '../MainContant/Education/Education';
import education from '../../data/education.json';

export const MainContant = () => {
  return (
    <div>
      <Intro />
      <ProjectList items={projects} />;
      <WorkList items={work} />;
      <Education items={education} />;
    </div>
  );
};
