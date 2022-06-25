import styled from 'styled-components';

export const Intro = () => (
  <>
    <Title>Oksana Stets</Title>
    <Job>Junior Frontend Developer</Job>
    <Summary>
      I'm enthusiastic, hard-working and responsible person looking for junior
      frontend position in modern friendly developing IT-company.
    </Summary>
    <Summary>
      My goal is to realize myself in a new job and give my abilities and
      talents to be useful.
    </Summary>
    <Divider />
  </>
);

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  /* line-height: 1.7; */
  color: #000;
`;
const Job = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  /* line-height: 17px; */
  color: #000;
  margin: 0 0 20px 0;
`;
const Summary = styled.p`
  width: 600px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #595959;
`;
const Divider = styled.hr`
  border-color: #fb6d3a;
  background-color: #fb6d3a;
`;
