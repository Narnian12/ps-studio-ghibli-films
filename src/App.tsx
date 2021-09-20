import { FC } from 'react';
import { Header } from './Components/Header';
import { GhibliAPIs } from './Components/GhibliAPIs';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <GhibliAPIs />;
    </>
  );
};

export default App;
