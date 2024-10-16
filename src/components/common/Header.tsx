import { css, useTheme } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/icons/logo.svg?react';
import { ThemeType } from '@/assets/styles/theme';

const Header = () => {
  const theme = useTheme() as ThemeType;
  const location = useLocation();
  const styles = headerStyles(theme, location);

  const navItems = [
    {
      to: `/list?contentType=15&keyword=&city=${encodeURIComponent('서울')}`,
      title: '행사',
      locationInfo: 'Festival',
      condition: 15,
    },
    {
      to: `/list?contentType=32&keyword=&city=${encodeURIComponent('서울')}`,
      title: '숙박',
      locationInfo: 'Lodgement',
      condition: 32,
    },
    {
      to: `/list?contentType=12&keyword=&city=${encodeURIComponent('서울')}`,
      title: '관광지',
      locationInfo: 'Attraction',
      condition: 12,
    },
    { to: '/mypage', title: '마이페이지', condition: 0 },
  ];

  return (
    <header css={styles.container}>
      <div css={styles.box}>
        <Link to="/">
          <Logo css={styles.logo} />
        </Link>
        <nav css={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.condition}
              css={styles.link}
              to={item.to}
              state={{
                locationInfo: item.locationInfo,
                condition: item.condition,
              }}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const headerStyles = (theme: ThemeType, location: { pathname: string }) => ({
  container: css({
    padding: '1rem 2%',
    width: '100%',
    zIndex: 999,
    margin: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  }),
  box: css({
    ...theme.interval.width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  logo: css({
    ...(location.pathname === '/' || location.pathname.includes('/list')
      ? theme.icons.headerWhiteLogo
      : theme.icons.defaultLogo),
  }),
  nav: css({
    display: 'flex',
    gap: '2.65rem',
    ...theme.fonts.header,
  }),
  link: css({
    color:
      location.pathname === '/' || location.pathname.includes('/list')
        ? '#fff'
        : '#000000',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
});

export default Header;
