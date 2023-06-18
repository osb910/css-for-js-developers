import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './components/GlobalStyles.tsx';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
);
