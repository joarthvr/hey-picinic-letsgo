// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import { BrowserRouter } from 'react-router-dom';
// import GlobalStyle from './assets/styles/GlobalStyle.tsx';
// createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <GlobalStyle />
//     <App />
//   </BrowserRouter>
// );
// import '@/assets/fonts/fonts.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/assets/styles/theme';
import GlobalStyle from '@/assets/styles/GlobalStyle.tsx';
import router from '@/router/Router';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);