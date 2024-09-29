// import { css } from '@emotion/react';
import './assets/fonts/fonts.css';
import Main from './pages/Main';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { ThemeProvider } from '@emotion/react';
import { theme } from './assets/styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
