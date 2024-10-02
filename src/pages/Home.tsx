import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '@/assets/styles/theme';
import { HomeFestivalCard, SearchConditionBtn } from '@/components/home';
import dummy from '@/models/data.json';
import InputForSearch from '@/components/common/InputForSearch';



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
    paddingBottom: '10.75rem',
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
  conditionContainer: css({
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    display: 'flex',
    gap: '1.5rem',
    width: '240px',
    textAlign: 'center' as const,
    margin: '5.69rem auto 2.37rem auto',
  }),
});
const Home = () => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => HomeStyles(theme), [theme]);
  const cities: City[] = dummy.cities;

  const [condition, setCondition] = useState<string>('행사 검색');

  const handleConditionChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newCondition = e.currentTarget.textContent || '';
    setCondition(newCondition);
  };
  
  useEffect(() => {
    console.log(condition);
  }, [condition]);
  const CONDITIONS = ['행사 검색', '숙박 검색', '관광지 검색'];
  return (
    <>
      <section css={[styles.section, styles.section1]}>
        <h1 css={[styles.msg, styles.centerMsg]}>
          찾고 싶은 행사, 숙소, 관광지를
          <br />
          검색해보세요.
        </h1>
        <div css={styles.conditionContainer}>
        {CONDITIONS.map((conditionTitle) => (
            <SearchConditionBtn
              key={conditionTitle}
              isSelected={condition === conditionTitle}
              onClick={handleConditionChange}
              title={conditionTitle}
            />
          ))}
        </div>
        <InputForSearch placeHolder={'지역 축제 찾아보기'} />
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
    </>
  );
};

export default Home;
