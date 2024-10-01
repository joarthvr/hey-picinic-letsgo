import FestivalImg from '../assets/images/festivalimg.png';
import { css, useTheme } from '@emotion/react';
import { useMemo } from 'react';
import { ThemeType } from '../assets/styles/theme';
const festivalListStyle = (theme: ThemeType) => ({
  container: css({
    color: '#fff',
    fontFamily: 'Pretendard',
    ...theme.interval.width,
    marginTop: '5.69rem',
    paddingBottom: '10.75rem',
  }),
  section1: css({
    width: '100%',
    height: '20.375rem',
    backgroundImage: `url(${FestivalImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
  }),
  sec1TextBox: css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
  h1: css({
    margin: 'auto',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Pretendard',
    fontSize: '2.5rem',
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
  }),
  sec1P: css({
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.52)',
    fontFamily: 'Pretendard',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  }),
});
const FestivalList = () => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => festivalListStyle(theme), [theme]);
  return (
    <>
      <section css={styles.section1}>
        <div css={styles.sec1TextBox}>
          <h1 css={styles.h1}>행사</h1>
          <p css={styles.sec1P}>Festival</p>
        </div>
      </section>
      <section>
        <h2>서울시의 서울 뮤직페스티벌에 대한 검색 결과입니다.</h2>
      </section>
    </>
  );
};

export default FestivalList;
