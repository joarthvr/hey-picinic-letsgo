import { useMemo } from 'react';
import noImage from '@/assets/images/no-image.png';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '@/assets/styles/theme';

const DetailPage = () => {
  const img = 0; // tmp
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => DetailPageStyles(theme), [theme]);
  return (
    <div css={styles.container}>
      <button css={styles.returnPageBtn}>리스트로 가기</button>
      <div css={styles.content}>숙박시설</div>
      <h1 css={styles.h1}>장강원 공원</h1>
      <h2 css={styles.h2}>강남 테헤란로 한복판</h2>
      <section css={styles.infoSec}>
        <figure css={styles.imgContainer}>
          <img css={styles.img} src={img ? img : noImage} alt="itemImage" />
          <figcaption hidden>디테일 이미지</figcaption>
        </figure>
        <div></div>
      </section>
    </div>
  );
};
const DetailPageStyles = (theme: ThemeType) => ({
  container: css({
    height: '1200px',
    ...theme.interval.width,
    fontFamily: 'Pretendard',
  }),
  returnPageBtn: css({
    color: '#000',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 'normal',
    marginTop: '8.44rem',
    marginBottom: '2.19rem',
    background: 'transparent',
    padding: 0,
  }),
  content: css({
    textAlign: 'center',
    color: '#FFF',
    fontSize: '0.75rem',
    fontWeight: 400,
    
    backgroundColor: theme.colors.MAIN_BLUE,
    width: '3.625rem',
    height: '1.3125rem',
    flexShrink: 0,
    margin: 'auto',
    padding: '0.2rem',
    borderRadius: '0.625rem',
    marginBottom: '3.31rem',
  }),
  h1: css({
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '0.75rem',
  }),
  h2: css({
    ...theme.fonts.gray,
    textAlign: 'center',
    marginBottom: '6.19rem',
  }),
  infoSec: css({
    height: '40rem',
    textAlign: 'center',
    margin: 'auto',
    display: 'flex',
  }),
  imgContainer: css({
    borderRadius: '1.25rem',
    background: '#D9D9D9',
    width: '50%',
    height: '17.3125rem',
    flexShrink: 0,
    position: 'relative' as const,
  }),
  img: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    borderRadius: '1.25rem',
  },
});
export default DetailPage;
