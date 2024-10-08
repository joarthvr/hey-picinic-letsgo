export const theme = {
  colors: {
    MAIN_PURPLE: '#1F0980',
    MAIN_BLUE: '#3B2DB5',
    TEXT_DARKGRAY: '#393939',
    TEXT_LIGHTGRAY: '#626262',
  },
  background: {
    listPageTop: {
      height: '20.375rem',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      fontFamily: 'Pretendard',
    },
  },
  position: {
    center: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
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
    listPageH1: {
      color: '#FFF',
      fontSize: '2.5rem',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: 'normal',
    },
    listPageH1Eng: {
      color: 'rgba(255, 255, 255, 0.52)',
      fontSize: '1.25rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    listPageH2: {
      color: '#000',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    h3: {
      color: '#000',
      fontSize: '1.25rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    gray: {
      color: 'rgba(0, 0, 0, 0.50)',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    description: {
      fontSize: '0.75rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    },
  },
  icons: {
    headerLogo: {
      width: '4.1875rem',
      height: '1.8125rem',
      flexShrink: 0,
      filter: 'brightness(0) invert(1)', // 흰색 필터 추가
      fill: '#fff',
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
      maxWidth: '1220px',
      padding: '0 1rem 0 1rem',
      margin: 'auto',
    },
  },
  input: {
    homeInput: {
      height: '3.375rem',
      padding: '1.125rem 1.3125rem 1.125rem 1.5rem',
      background: 'transparent',
      borderRadius: '0.5rem',
      border: '1.5px solid rgba(234, 234, 234, 0.34)',
      color: '#fff',
      fontSize: '0.8125rem',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '1rem',
    },
    listInput: {
      height: '3.125rem;',
      padding: '1.125rem 1.3125rem 1.125rem 1.5rem',
      background: 'transparent',
      borderRadius: '1rem',
      border: '1px solid rgba(0, 0, 0, 0.14)',
      color: '#000',
      fontSize: '0.8125rem',
      fontWeight: 400,
      lineHeight: 'normal',
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
    listSelect: {
      height: '3.0626rem',
      flexShrink: 0,
      borderRadius: '1rem',
      border: '1px solid rgba(136, 136, 136, 0.34)',
      background: 'transparent',
      padding: '0.725rem 0.4125rem 0.625rem 0.5rem',
      color: 'rgba(0, 0, 0, 0.74)',
      fontSize: '0.8125rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '1rem',
      whiteSpace: 'nowrap',
    },
  },
};

export type ThemeType = typeof theme;
