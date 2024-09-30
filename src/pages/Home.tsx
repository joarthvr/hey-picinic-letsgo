import { useMemo } from 'react';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '../assets/styles/theme';
import HomeFestivalCard from '../components/home/HomeFestivalCard';
import dummy from '../models/data.json';
import HomeInput from '../components/common/HomeInput';

interface City {
  id: number | string;
  city: string;
}

const HomeStyles = (theme: ThemeType) => ({
  section: css({
    width: '100%',
    minHeight: '50vh',
    fontFamily: 'Pretendard',
  }),
  msg: css({
    textAlign: 'center',
    fontSize: '2rem',
    fontStyle: 'normal',
    lineHeight: 'normal',
  }),
  centerMsg: css({
    color: '#FFF',
    fontWeight: '300',
  }),
  section1: css({
    background: theme.colors.MAIN_BLUE,
    ...theme.interval.mainPage,
  }),
  sec2H2: css({
    color: '#000',
    fontWeight: '700',
    marginTop: '8.87rem',
  }),
  cards: css({
    ...theme.interval.width,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.94rem',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4.06rem',
    paddingBottom: '6.06rem',
  }),
});

const Home = () => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => HomeStyles(theme), [theme]);
  const cities: City[] = dummy.cities;

  return (
    <div>
      <section css={[styles.section, styles.section1]}>
        <h1 css={[styles.msg, styles.centerMsg]}>
          찾고 싶은 행사, 숙소, 관광지를
          <br />
          검색해보세요.
        </h1>
        <HomeInput placeHolder={'지역 축제 찾아보기'} />
      </section>
      <section css={styles.section}>
        <h2 css={[styles.msg, styles.sec2H2]}>
          인기있는 지역의 행사를 확인해보세요!
        </h2>
        <div css={styles.cards}>
          {cities.map((city) => (
            <HomeFestivalCard key={city.id} city={city.city} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
