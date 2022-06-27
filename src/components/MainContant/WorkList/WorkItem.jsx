import styled from 'styled-components';

export const WorkItem = ({ job, company, period, place, duties }) => {
  return (
    <WorkBlock>
      <WorkTitle>
        {job}
        <Company>{company}</Company>
      </WorkTitle>
      <Period>
        {period}
        <Divider>|</Divider>{place}
      </Period>
      <Descr>
        {duties.map((duty, index) => (
          <DescrItem key={index}>{duty}</DescrItem>
        ))}
      </Descr>
    </WorkBlock>
  );
};
const WorkBlock = styled.div``;
const WorkTitle = styled.h4`
margin-bottom: 10px;
  font-size: 16px;
  line-height: 20px;
  color: ${p => p.theme.colors.title};
  font-weight: bold;
`;
const Company = styled.span`
  color: ${p => p.theme.colors.secondary};
  margin: 0 0 10px 5px;
`;
const Period = styled.p`
  font-size: 14px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
  margin: 0 0 10px 0;
`;
const Descr = styled.ul`
  /* padding-bottom: 22px; */
  list-style-position: inside;
  list-style-type: initial;
`;
const DescrItem = styled.li`
  font-size: 14px;
  line-height: 24px;
  color: ${p => p.theme.colors.primary};
`;
const Divider = styled.span`
  margin-left: 0.5em;
  margin-right: 0.5em;
`