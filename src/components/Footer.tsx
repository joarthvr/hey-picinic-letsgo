import { css } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

export default function Footer() {
  const footerStyles = {
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
      fontSize: '0.75rem',
      fontWeight: '300',
      lineHeight: '1.5',
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
      // background:
      //   'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
      // WebkitBackgroundClip: 'text',
      // backgroundClip: 'text',
      // WebkitTextFillColor: 'transparent',
    }),
    github: css({
      fontSize: '1.25rem',
      color: '#fff',
    }),
    mail: css({
      fontSize: '1.25rem',
      // color: '#fff',
      color: 'blue',
    }),
  };

  return (
    <footer css={footerStyles.container}>
      <div css={footerStyles.snsIcons}>
        <FaGithub css={footerStyles.github} />
        <FaInstagram css={footerStyles.insta} />
        <MdOutlineEmail css={footerStyles.mail} />
      </div>
      <p css={footerStyles.copyRight}>
        © 2024 프로그래머스 데브코스 8조 2팀 All pictures cannot be copied
        without permission.
      </p>
    </footer>
  );
}
