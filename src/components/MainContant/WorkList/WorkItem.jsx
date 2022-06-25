export const WorkItem = ({ job, company, period, place, duties }) => {
  return (
    <>
      <h4>
        {job}
        <span>{company}</span>
      </h4>
      <p>
        {period}
        <span>|</span> {place}
      </p>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </>
  );
};
