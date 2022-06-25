import styled from 'styled-components';

import { ContactBlock } from '../Sidebar/ContactsBlock/ContactsBlock';
import { Skills } from '../Sidebar/Skills/Skills';
import { Languages } from '../Sidebar/Languages/Languages';

import contacts from '../../data/contacts.json';
import skills from '../../data/skills.json';
import languages from '../../data/languages.json';

export const Sidebar = () => {
  return (
    <AsideBar>
      <ContactBlock items={contacts} />
      <Skills items={skills} />
      <Languages title={languages.title} stack={languages.stack} />
    </AsideBar>
  );
};
const AsideBar = styled.aside`
  background-color: #1e2939;
  width: 370px;
  padding: 40px 0 10px 0;
`;
