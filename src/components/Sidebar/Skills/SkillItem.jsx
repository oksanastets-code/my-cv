export const SkillItem = ({ title, stack }) => (
  <>
    <h3>{title}</h3>
    <ul>
      {stack.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
);
