import { useEffect, useState, useMemo } from 'react';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '@/assets/styles/theme';
import { HomeFestivalCard, SearchConditionBtn } from '@/components/home';
import data from '@/models/data.json';
import InputForSearch from '@/components/common/InputForSearch';

interface City {
  id: number | string;
  city: string;
}
interface Condition {
  id: number;
  condition: string;
  locationInfo: string;
}
const HomePage = () => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => HomeStyles(theme), [theme]);
  const cities: City[] = data.cities;
  const conditions: Condition[] = data.conditions;
  const [selectedCondition, setSelectedCondition] = useState<Condition>(
    conditions[0]
  );

  const handleConditionChange = (newCondition: Condition) => {
    setSelectedCondition(newCondition);
  };

  useEffect(() => {
    console.log(selectedCondition);
  }, [selectedCondition]);
  return (
    <>
      <section css={[styles.section, styles.section1]}>
        <h1 css={[styles.msg, styles.centerMsg]}>
          찾고 싶은 행사, 숙소, 관광지를
          <br />
          검색해보세요.
        </h1>
        <div css={styles.conditionContainer}>
          {data.conditions.map((item) => (
            <SearchConditionBtn
              key={item.id}
              isSelected={item.id === selectedCondition.id}
              onClick={() => handleConditionChange(item)}
              title={item.condition}
            />
          ))}
        </div>
        <InputForSearch
          placeHolder={`지역 ${selectedCondition.condition}`}
          condition={selectedCondition.id}
          locationInfo={selectedCondition.locationInfo}
          type='home'
        />
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

export default HomePage;
