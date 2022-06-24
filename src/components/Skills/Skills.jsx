import { SkillItem } from './SkillItem';

export const Skills = ({ items }) => (
  <>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <SkillItem title={item.title} stack={item.stack} />
        </li>
      ))}
    </ul>
  </>
);
