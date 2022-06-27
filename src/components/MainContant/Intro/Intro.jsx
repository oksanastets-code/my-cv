import styled from 'styled-components';

export const Intro = () => (
  <>
  <SummaryBlock>
    <Title>Oksana Stets</Title>
    <Job>Junior Frontend Developer</Job>
    <Summary>
      I'm enthusiastic, hard-working and responsible person looking for junior
      frontend position in a modern friendly developing IT-company.
    </Summary>
    <Summary>
      My goal is to apply myself in a new job and give my abilities and
      talents to be useful.
    </Summary>
  </SummaryBlock>
    <Divider />
</>
);

const SummaryBlock = styled.div`
color: ${(p) => p.theme.colors.title};
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 70px;
  /* line-height: 1.7; */
  
`;
const Job = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  /* line-height: 17px; */
  margin: 0 0 20px 0;
`;
const Summary = styled.p`
  width: 600px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.colors.primary};
`;
const Divider = styled.hr`
  border-color: ${(p) => p.theme.colors.secondary};
  background-color: ${(p) => p.theme.colors.secondary};
`;
