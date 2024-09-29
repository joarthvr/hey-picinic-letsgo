export const theme = {
  colors: {
    MAIN_PURPLE: '#1F0980',
    MAIN_BLUE: '#3B2DB5',
    TEXT_DARKGRAY: '#393939',
    TEXT_LIGHTGRAY: '#626262',
  },
  fonts: {
    header: {
      fontFamily: 'Pretendard-Medium',
      fontSize: '0.9375rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    footer: {
      fontFamily: 'Pretendard-Light',
      fontSize: '0.75rem',
      fontWeight: '300',
      lineHeight: '1.5',
    },
  },
  icons: {
    headerLogo: {
      width: '4.1875rem',
      height: '1.8125rem',
      flexShrink: 0,
      color: '#fff',
      filter: 'brightness(0) invert(1)', // 흰색 필터 추가
    },
    footerInsta: {},
  },
  interval: {
    mainPage: {
      paddingTop: '11.19rem',
    },
    listPage: {
      paddingTop: '6.13rem',
    },
  },
};

export type ThemeType = typeof theme;
