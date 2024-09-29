export const theme = {
  colors: {
    MAIN_PURPLE: '#4880EE',
    MAIN_BLUE: '#3B2DB5',
    TEXT_DARKGRAY: '#393939',
    TEXT_LIGHTGRAY: '#626262',
  },
  fonts: {
    header: {
      'font-family': 'Pretendard-Medium',
      'font-size': '0.9375rem',
      'font-style': 'normal',
      'font-weight': '500',
      'line-height': 'normal',
    },
    footer:{
      fontFamily: 'Pretendard-Light',
      fontSize: '0.75rem',
      fontWeight: '300',
      lineHeight: '1.5',
    }
  },
  icons: {
    headerLogo: {
      width: '4.1875rem',
      height: '1.8125rem',
      'flex-shrink': 0,
      color: '#fff',
      filter: 'brightness(0) invert(1)', // 흰색 필터 추가
    },
    footerInsta: {
      
    }
  },
};

export type ThemeType = typeof theme;
