import { Project } from '../Project/Project';

export const ProjectList = ({ items }) => {
  //   const { id, type, deployLink, name, period, stack, descr, note, codeLink } =
  //     items;

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Project
              type={item.type}
              deployLink={item.deployLink}
              name={item.name}
              period={item.period}
              stack={item.stack}
              descr={item.descr}
              note={item.note}
              codeLink={item.codeLink}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
