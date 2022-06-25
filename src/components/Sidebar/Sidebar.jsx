import { ContactBlock } from '../Sidebar/ContactsBlock/ContactsBlock';
import contacts from '../../data/contacts.json';
import { Skills } from '../Sidebar/Skills/Skills';
import skills from '../../data/skills.json';
import { Languages } from '../Sidebar/Languages/Languages';
import languages from '../../data/languages.json';

export const Sidebar = () => {
  return (
    <>
      <ContactBlock items={contacts} />
      <Skills items={skills} />
      <Languages title={languages.title} stack={languages.stack} />
    </>
  );
};
