export const EducationItem = ({ school, qualification, period, place }) => (
  <>
    <h4>{school}</h4>
    <h5>{qualification}</h5>
    <p>
      {period}
      <span>|</span> {place}
    </p>
  </>
);
