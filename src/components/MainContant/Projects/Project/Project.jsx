import styled from 'styled-components';

export const Project = ({
  type,
  deployLink,
  name,
  period,
  stack,
  descr,
  note,
  codeLink,
}) => {
  return (
    <ProjectBlock>
      <ProjectTitle>
        {type}
        <ProjectLink href={deployLink}>{name}</ProjectLink>
      </ProjectTitle>
      <Period>{period}</Period>
      <Descr>
        <DescrItem>{stack}</DescrItem>
        <DescrItem>
          {descr}
          <span>
            <LinkCode href={codeLink}>code.</LinkCode>
          </span>
        </DescrItem>
        {note && <DescrItem>{note}</DescrItem>}
      </Descr>
    </ProjectBlock>
  );
};
const ProjectBlock = styled.div``;
const ProjectTitle = styled.h4`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 20px;
  color: ${p => p.theme.colors.title};
  font-weight: 700;
`;
const ProjectLink = styled.a`
  color: ${p => p.theme.colors.secondary};
  text-decoration: underline;
  margin: 0 0 10px 5px;
`;
const Period = styled.p`
  font-size: 14px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
  margin-bottom: 10px;
`;
const Descr = styled.ul`
  list-style-position: inside;
  list-style-type: initial;
`;
const DescrItem = styled.li`
  font-size: 14px;
  line-height: 24px;
  color: ${p => p.theme.colors.primary};
`;
const LinkCode = styled.a`
  margin-left: 5px;
  text-decoration: underline;
  &:hover {
    color: ${p => p.theme.colors.secondary};
  }
`;
