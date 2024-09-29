import '@emotion/react';
import { ThemeType } from './assets/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {
    return;
  }
}
