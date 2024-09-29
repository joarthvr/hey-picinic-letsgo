import { css } from '@emotion/react';

export default function Main() {
  const styles = {
    section: css({
      width: '100%',
      height: '50vh',
      background: '#3B2DB5',
    }),
    centerMsg: css({
      color: '#FFF',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: '700',
    }),
  };
  return (
    <div>
      <section css={styles.section}>
        <p css={styles.centerMsg}>
          찾고 싶은 행사, 숙소, 관광지를
          <br />
          검색해보세요.
        </p>
      </section>
      <section css={styles.section}></section>
    </div>
  );
}
