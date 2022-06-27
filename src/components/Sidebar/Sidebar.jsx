import styled from 'styled-components';

import { Photo } from './Photo/Photo';
import { ContactBlock } from '../Sidebar/ContactsBlock/ContactsBlock';
import { Skills } from '../Sidebar/Skills/Skills';
import { Languages } from '../Sidebar/Languages/Languages';

import contacts from '../../data/contacts.json';
import skills from '../../data/skills.json';
import languages from '../../data/languages.json';

export const Sidebar = () => {
  return (
    <AsideBar>
      <Photo/>
      <ContactBlock items={contacts} />
      <Skills items={skills} />
      <Languages title={languages.title} stack={languages.stack} />
    </AsideBar>
  );
};
const AsideBar = styled.aside`
  width: 370px;
  padding: 40px 35px 10px 35px;
  color: ${p => p.theme.colors.textSidebar};
  background-color: #1e2939;
  /* padding: 40px 0 10px 0; */
`;
