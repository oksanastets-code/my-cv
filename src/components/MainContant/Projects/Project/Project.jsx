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
        <DescrItem>{note}</DescrItem>
      </Descr>
    </ProjectBlock>
  );
};
const ProjectBlock = styled.div``;
const ProjectTitle = styled.h4`
  font-size: 16px;
  line-height: 20px;
  color: #000;
  font-weight: bold;
`;
const ProjectLink = styled.a`
  color: #fb6d3a;
  text-decoration: underline;

  margin: 0 0 10px 5px;
`;
const Period = styled.p`
  font-size: 14px;
  line-height: 15px;
  color: #595959;
  margin: 0 0 10px 0;
`;
const Descr = styled.ul`
  padding-bottom: 22px;
  list-style-position: inside;
  list-style-type: initial;
`;
const DescrItem = styled.li`
  font-size: 14px;
  line-height: 24px;
  color: #1e2939;
`;
const LinkCode = styled.a`
  margin-left: 5px;
  text-decoration: underline;
  &:hover {
    color: #fb6d3a;
  }
`;
