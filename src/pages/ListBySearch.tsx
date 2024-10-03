import FestivalImg from '../assets/images/festivalimg.png';
import { css, useTheme } from '@emotion/react';
import { useMemo } from 'react';
import { ThemeType } from '../assets/styles/theme';
import InputForSearch  from '../components/common/InputForSearch'
const festivalListStyle = (theme: ThemeType) => ({
  section1: css({
    backgroundImage: `url(${FestivalImg})`,
    position: 'relative',
    ...theme.background.listPageTop,
  }),
  sec1TextBox: css({
    position: 'absolute',
    ...theme.position.center,
  }),
  h1: css({
    ...theme.fonts.listPageH1,
  }),
  h1Eng: css({
    ...theme.fonts.listPageH1Eng,
  }),
  section2: css({
    fontFamily: 'Pretendard',
    ...theme.interval.width,
    height: '50vh',
  }),
  h2: css({
    ...theme.fonts.listPageH2,
    marginTop:'7.56rem',
  }),
});
const ListBySearch = () => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => festivalListStyle(theme), [theme]);
  return (
    <>
      <section css={styles.section1}>
        <div css={styles.sec1TextBox}>
          <h1 css={styles.h1}>행사</h1>
          <p css={styles.h1Eng}>Festival</p>
        </div>
      </section>
      <section css={styles.section2}>
        <h2 css={styles.h2}>
          서울시의 서울 뮤직페스티벌에 대한 검색 결과입니다.
        </h2>
        <InputForSearch placeHolder={'리스트페이지'}/>
      </section>
    </>
  );
};

export default ListBySearch;
