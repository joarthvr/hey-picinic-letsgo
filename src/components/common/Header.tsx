import { css, useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import { ThemeType } from '../../assets/styles/theme';

const headerStyles = (theme: ThemeType) => ({
  container: css({
    padding: '1rem 5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 999,
    margin: 0,
    position: 'absolute' as const,
    top: 0,
    left: 0,
  }),
  logo: css({
    ...theme.icons.headerLogo,
    filter: theme.icons.headerLogo.filter,
  }),
  nav: css({
    display: 'flex',
    gap: '2.65rem',
    ...theme.fonts.header, // 테마의 fonts.header 스타일 적용
  }),
  link: css({
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
});

export default function Header() {
  const theme = useTheme() as ThemeType;
  const styles = headerStyles(theme);

  return (
    <header css={styles.container}>
      <img css={styles.logo} src={logo} alt="header-logo" />
      <nav css={styles.nav}>
        <NavLink css={styles.link} to="/festival">
          행사
        </NavLink>
        <NavLink css={styles.link} to="/accommodation">
          숙박
        </NavLink>
        <NavLink css={styles.link} to="/attractions">
          관광지
        </NavLink>
        <NavLink css={styles.link} to="/mypage">
          마이페이지
        </NavLink>
      </nav>
    </header>
  );
}
