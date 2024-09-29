import './assets/fonts/fonts.css';
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
