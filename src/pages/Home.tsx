import { css, useTheme } from '@emotion/react';
import { ThemeType } from '../assets/styles/theme';
import HomeFestivalCard from '../components/home/HomeFestivalCard';
const HomeStyles = (theme: ThemeType) => ({
  section: css({
    width: '100%',
    height: '50vh',
    fontFamily: 'Pretendard',
  }),
  msg:{
    textAlign: 'center' as const,
    fontSize: '2rem',
    fontStyle: 'normal',
    lineHeight: 'normal',
  },
  centerMsg: css({
    color: '#FFF',
    fontWeight: '300',
  }),
  section1: {
    background: theme.colors.MAIN_BLUE,
    ...theme.interval.mainPage,
  },
  sec2H2: {
    color: '#000',
    fontWeight: '700',
    marginTop: '8.87rem'
  },
});
export default function Home() {
  const theme = useTheme() as ThemeType;
  const styles = HomeStyles(theme);
  return (
    <div>
      <section css={[styles.section, styles.section1]}>
        <h1 css={[styles.msg, styles.centerMsg]}>
          찾고 싶은 행사, 숙소, 관광지를
          <br />
          검색해보세요.
        </h1>
      </section>
      <section css={styles.section}>
        <h2 css={[styles.msg,styles.sec2H2]}>인기있는 지역의 행사를 확인해보세요!</h2>
        <HomeFestivalCard city = "서울"/>
      </section>
    </div>
  );
}
