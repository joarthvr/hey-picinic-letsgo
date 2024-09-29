// import { css } from '@emotion/react';
import './assets/fonts/fonts.css';
// import Main from './pages/Home';
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';
import { ThemeProvider } from '@emotion/react';
import { theme } from './assets/styles/theme';
import CommonRouter from './router/CommonRouter';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CommonRouter/>
    </ThemeProvider>
  );
}

export default App;
