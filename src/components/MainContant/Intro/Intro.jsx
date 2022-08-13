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
         <br />
        Aware of team-working makes me stronger developer. Ready to learn new
        technologies and improve my current skills.
        <br />
         <br />
        My goals are: to apply myself in a new job, to use my talents and
        abilities and to support our Army financially in that time.
      </Summary>
    </SummaryBlock>
  </>
);

const SummaryBlock = styled.div`
  color: ${p => p.theme.colors.textSidebar};
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-top: 0;
    margin-left: 15px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 600px;
    padding: 0;
    margin-left: 0;
    color: ${p => p.theme.colors.title};
    border-bottom: 2px solid ${p => p.theme.colors.secondary};
  }
`;
const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 15px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 70px;
    margin-bottom: 0;
  }
`;
const Job = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;
const Summary = styled.p`
  color: ${p => p.theme.colors.textSidebar};

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 600px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 18px;
    line-height: 1.33;
    color: ${p => p.theme.colors.primary};
  }
`;
