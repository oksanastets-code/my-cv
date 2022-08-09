import { Container } from './Container';
import { MainContant } from './MainContant';
import { Sidebar } from './Sidebar';

export const App = () => {
  return (
    <Container>
      <Sidebar />
      <MainContant />
    </Container>
  );
};
