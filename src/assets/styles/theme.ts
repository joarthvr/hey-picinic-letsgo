export const theme = {
  colors: {
    MAIN_PURPLE: '#1F0980',
    MAIN_BLUE: '#3B2DB5',
    TEXT_DARKGRAY: '#393939',
    TEXT_LIGHTGRAY: '#626262',
  },
  fonts: {
    header: {
      fontFamily: 'Pretendard',
      fontSize: '0.9375rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },
    footer: {
      fontFamily: 'Pretendard',
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
    width: {
      maxWidth: '1200px',
      margin: 'auto',
    },
  },
  input: {
    homeInput: {
      height: '3.375rem',
      padding: '1.125rem 1.3125rem 1.125rem 1.5rem',
      background: 'transparent',
      borderRadius: '0.5rem',
      border: '1.5px solid #EAEAEA',
    },
  },
  select: {
    homeSelect: {
      height: '3.375rem',
      flexShrink: 0,
      borderRadius: '0.5rem',
      border: '1.5px solid rgba(234, 234, 234, 0.34)',
      background: 'transparent',
      padding: '1.125rem 1.3125rem 1.125rem 1.5rem',
      color: 'rgba(255, 255, 255, 0.74)',
      fontSize: '0.8125rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '1rem',
      whiteSpace: 'nowrap',
    },
  },
  img: {
    listTopImg: {
      width: '100%',
    },
  },
};

export type ThemeType = typeof theme;
