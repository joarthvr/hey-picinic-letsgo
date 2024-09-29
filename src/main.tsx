import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle.tsx';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
