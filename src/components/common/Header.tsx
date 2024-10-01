import { css, useTheme } from '@emotion/react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import { ThemeType } from '../../assets/styles/theme';

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

const Header = () => {
  const theme = useTheme() as ThemeType;
  const styles = headerStyles(theme);

  return (
    <header css={styles.container}>
      <div css = {styles.box}>
        <Link to="/">
          <img css={styles.logo} src={logo} alt="header-logo" />
        </Link>
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
      </div>
    </header>
  );
};
export default Header;
