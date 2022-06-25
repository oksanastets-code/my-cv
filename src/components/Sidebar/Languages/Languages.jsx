export const Languages = ({ title, stack }) => (
  <>
    <h3>{title}</h3>
    <ul>
      {stack.map(item => (
        <li key={item.lang}>
          <span>{item.lang}</span>
          <span>&ensp;&ndash;&ensp;</span>
          <span>{item.level}</span>
        </li>
      ))}
    </ul>
  </>
);
