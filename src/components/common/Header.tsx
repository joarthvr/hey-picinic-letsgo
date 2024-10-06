import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/icons/logo.svg?react';
import { ThemeType } from '@/assets/styles/theme';
// interface Condition {
//   id: number;
//   condition: string;
//   locationInfo: string;
// }
const Header = () => {
  const theme = useTheme() as ThemeType;
  const styles = headerStyles(theme);

  const navItems = [
    {
      to: `/list?keyword=${encodeURIComponent('')}&city=${encodeURIComponent('')}`,
      title: '행사',
      locationInfo: 'Festival',
      condition: 15,
    },
    {
      to: `/list?keyword=${encodeURIComponent('')}&city=${encodeURIComponent('')}`,
      title: '숙박',
      locationInfo: 'Lodgement',
      condition: 32,
    },
    {
      to: `/list?keyword=${encodeURIComponent('')}&city=${encodeURIComponent('')}`,
      title: '관광지',
      locationInfo: 'Attraction',
      condition: 12,
    },
    { to: '/mypage', title: '마이페이지', condtion: 0 },
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

const headerStyles = (theme: ThemeType) => ({
  container: css({
    padding: '1rem 5%',
    width: '100%',
    zIndex: 999,
    margin: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
    // filter: theme.icons.headerLogo.filter,
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

export default Header;
