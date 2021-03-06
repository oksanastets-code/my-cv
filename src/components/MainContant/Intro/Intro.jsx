import styled from 'styled-components';

export const Intro = () => (
  <>
    <SummaryBlock>
      <Title>Oksana Stets</Title>
      <Job>Junior Frontend Developer</Job>
      <Summary>
        I'm enthusiastic, hard-working and responsible person looking for junior
        frontend position in a modern friendly developing IT-company.
        <br />
        Aware of team-working makes me stronger developer. Ready to learn new
        technologies and improve my current skills.
        <br />
        My goals are: to apply myself in a new job, to use my talents and abilities
        and to support our Army financially in that time.
      </Summary>
    </SummaryBlock>
  </>
);

const SummaryBlock = styled.div`
  color: ${p => p.theme.colors.title};
  border-bottom: 2px solid ${p => p.theme.colors.secondary};
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 70px;
`;
const Job = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;
const Summary = styled.p`
  width: 600px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 18px;
  line-height: 24px;
  color: ${p => p.theme.colors.primary};
`;
