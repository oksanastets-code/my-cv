import styled from 'styled-components';

import Media from 'react-media';
import { breakpoints } from 'constants/breakpoints';

import { Photo } from './Photo/Photo';
import { Intro } from 'components/MainContant/Intro/Intro';
import { ContactBlock } from '../Sidebar/ContactsBlock/ContactsBlock';
import { Skills } from '../Sidebar/Skills/Skills';
import { Languages } from '../Sidebar/Languages/Languages';

import contacts from '../../data/contacts.json';
import skills from '../../data/skills.json';
import languages from '../../data/languages.json';

export const Sidebar = () => {
  return (
    <AsideBar>
      <TabletBlock>
        <Photo />
        <Media query={breakpoints.onlyTablet} render={() => <Intro />} />
      </TabletBlock>
      <ContactBlock items={contacts} />
      <Skills items={skills} />
      <Languages title={languages.title} stack={languages.stack} />
    </AsideBar>
  );
};
const AsideBar = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  
  color: ${p => p.theme.colors.textSidebar};
  /* background-color: #1e2939; */
  background: #1e2939; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #1e2939,
    rgba(30, 41, 57, 0.5)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #1e2939,
    rgba(30, 41, 57, 0.5)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media screen and (min-width: 1280px) {
    width: 370px;
    height: 100%;
    padding: 40px 35px 40px 35px;
    flex-direction: column;

    /* flex-wrap: nowrap; */
  }
`;
const TabletBlock = styled.div`

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    padding: 10px;
  }
`;