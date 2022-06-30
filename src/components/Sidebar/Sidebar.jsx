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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 35px 40px 35px;
  color: ${p => p.theme.colors.textSidebar};
  background-color: #1e2939;
`;
