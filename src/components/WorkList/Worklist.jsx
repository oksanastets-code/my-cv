import { WorkItem } from './WorkItem';
export const WorkList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <WorkItem
              job={item.job}
              company={item.company}
              period={item.period}
              place={item.place}
              duties={item.duties}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
