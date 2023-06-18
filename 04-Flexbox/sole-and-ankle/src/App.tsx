import {useState, FC} from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ShoeIndex from './components/ShoeIndex';

const App: FC = () => {
  const [sortId, setSortId] = useState<string>('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
  font-family: 'Raleway';
`;

export default App;
