import { Intro } from './Intro/Intro';
import { ProjectList } from './Projects/ProjectList/ProjectList';
import projects from '../data/projects.json';
import { WorkList } from './WorkList/Worklist';
import work from '../data/work.json';
import { Education } from './Education/Education';
import education from '../data/education.json';
import { ContactBlock } from './ContactsBlock/ContactsBlock';
import contacts from '../data/contacts.json';
import { Skills } from './Skills/Skills';
import skills from '../data/skills.json';
import { Languages } from './Languages/Languages';
import languages from '../data/languages.json';

export const App = () => {
  return (
    <>
      <Intro />
      <ProjectList items={projects} />;
      <WorkList items={work} />;
      <Education items={education} />;
      <ContactBlock items={contacts} />
      <Skills items={skills} />
      <Languages title={languages.title} stack={languages.stack} />
    </>
  );
};
