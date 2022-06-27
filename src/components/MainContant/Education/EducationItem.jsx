import styled from 'styled-components';

export const EducationItem = ({ school, qualification, period, place }) => (
  <EduBlock>
    <EduTitle>{school}</EduTitle>
    <Quali>{qualification}</Quali>
    <Period>
      {period} 
      <Divider>|</Divider>{place}
    </Period>
  </EduBlock>
);
const EduBlock = styled.div``;
const EduTitle = styled.h4`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 20px;
  color: ${p => p.theme.colors.secondary};
`;
const Quali = styled.h5`
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 15px;
  color: ${p => p.theme.colors.title};
`
const Period = styled.p`
  font-size: 14px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
`;
const Divider = styled.span`
  margin-left: 0.5em;
  margin-right: 0.5em;
`