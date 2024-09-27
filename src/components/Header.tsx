import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import whiteLogo from '../assets/picinic_logo_white.png';

export default function Header() {
  const headerStyles = {
    container: css({
      padding: '1rem 7.37rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),
    logo: css({
      height: '30px', // 로고 크기 조정 (예시)
    }),
    nav: css({
      display: 'flex',
      gap: '2.65rem',
    }),
    link: css({
      color: '#fff',
      fontSize: '0.9375rem',
      fontWeight: 500,
      lineHeight: 'normal',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    }),
  };

  return (
    <header css={headerStyles.container}>
      <img css={headerStyles.logo} src={whiteLogo} alt="Picinic-white-Logo" />
      <nav css={headerStyles.nav}>
        <Link css={headerStyles.link} to="/">
          행사
        </Link>
        <Link css={headerStyles.link} to="/">
          숙박
        </Link>
        <Link css={headerStyles.link} to="/">
          관광지
        </Link>
        <Link css={headerStyles.link} to="/">
          마이페이지
        </Link>
      </nav>
    </header>
  );
}
