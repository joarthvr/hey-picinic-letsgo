import { css, useTheme } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { ThemeType } from '@/assets/styles/theme';

const Footer = () => {
  const theme = useTheme() as ThemeType;
  const styles = footerStyles(theme);
  return (
    <footer css={styles.container}>
      <div css={styles.snsIcons}>
        <FaGithub css={styles.github} />
        <FaInstagram css={styles.insta} />
        <MdOutlineEmail css={styles.mail} />
      </div>
      <p css={styles.copyRight}>
        © 2024 프로그래머스 데브코스 8조 2팀 All pictures cannot be copied
        without permission.
      </p>
    </footer>
  );
};
const footerStyles = (theme: ThemeType) => ({
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D9D9D980',
    backgroundColor: '#A3A3A3',
    width: '100%',
    padding: '1rem 0',
  }),
  copyRight: css({
    ...theme.fonts.footer,
    textAlign: 'center',
    margin: '0.5rem 0',
  }),
  snsIcons: css({
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '0.5rem',
  }),
  insta: css({
    fontSize: '1.25rem',
    color: '#fff',
  }),
  github: css({
    fontSize: '1.25rem',
    color: '#fff',
  }),
  mail: css({
    fontSize: '1.25rem',
    color: 'blue',
  }),
});
export default Footer;
