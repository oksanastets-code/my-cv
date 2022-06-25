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
    <div>
      <h4>{type}</h4>
      <a href={deployLink}>{name}</a>
      <p>{period}</p>
      <ul>
        <li>{stack}</li>
        <li>
          {descr}
          <span>
            <a href={codeLink}>code</a>
          </span>
        </li>
        <li>{note}</li>
      </ul>
    </div>
  );
};
