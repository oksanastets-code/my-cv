import { EducationItem } from './EducationItem';
export const Education = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <EducationItem
          school={item.school}
          qualification={item.qualification}
          period={item.period}
          place={item.place}
        />
      </li>
    ))}
  </ul>
);
