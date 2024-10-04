import React from 'react';
import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';
import { ThemeType } from '@/assets/styles/theme';

interface NavItem {
  to: string;
  title: string;
  locationInfo?: string;
  condition?: number;
}

const navItems: NavItem[] = [
  {
    to: '/list/festival',
    title: '행사',
    locationInfo: 'Festival',
    condition: 15,
  },
  {
    to: '/list/lodgment',
    title: '숙박',
    locationInfo: 'Lodgement',
    condition: 32,
  },
  {
    to: '/list/attractions',
    title: '관광지',
    locationInfo: 'Attraction',
    condition: 12,
  },
  { to: '/mypage', title: '마이페이지' },
];

const Header: React.FC = () => {
  const theme = useTheme() as ThemeType;
  const styles = headerStyles(theme);

  return (
    <header css={styles.container}>
      <div css={styles.box}>
        <Link to="/" aria-label="홈으로 이동">
          <img css={styles.logo} src={logo} alt="로고" />
        </Link>
        <nav css={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              css={styles.link}
              to={item.to}
              state={
                item.locationInfo && item.condition
                  ? { locationInfo: item.locationInfo, condition: item.condition }
                  : undefined
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const headerStyles = (theme: ThemeType) => ({
  container: css({
    padding: '1rem 5%',
    width: '100%',
    zIndex: 999,
    margin: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
    filter: theme.icons.headerLogo.filter,
  }),
  box: css({
    ...theme.interval.width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  logo: css({
    ...theme.icons.headerLogo,
  }),
  nav: css({
    display: 'flex',
    gap: '2.65rem',
    ...theme.fonts.header,
  }),
  link: css({
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
});

export default React.memo(Header);