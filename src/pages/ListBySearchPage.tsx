import Festival from '@/assets/images/festival.png';
import Lodgement from '@/assets/images/lodgment.png';
import Attraction from '@/assets/images/attraction.png';
import { css, useTheme } from '@emotion/react';
import { useMemo } from 'react';
import { ThemeType } from '@/assets/styles/theme';
import { useLocation, useSearchParams } from 'react-router-dom';
import InputForSearch  from '@/components/common/InputForSearch'
type LocatType = 'Festival' | 'Lodgement' | 'Attraction';
const backgroundImages: Record<LocatType, string> = {
  Festival,
  Lodgement,
  Attraction,
};
interface ContentInfo {
  title: string;
  image: string;
}
const contentMap: Record<number, ContentInfo> = {
  15: { title: '행사', image: Festival },
  32: { title: '숙박', image: Lodgement },
  12: { title: '관광지', image: Attraction },
};

const ListBySearch = () => {
  const [searchParams] = useSearchParams();
  const searchParamsCity = searchParams.get('city');
  const searchParamsKeyword = searchParams.get('keyword');
  const theme = useTheme() as ThemeType;
  const location = useLocation();
  const locationInfo = location.state.locationInfo;
  const condition = location.state.condition;
  console.log(location)
  console.log(locationInfo);
  const styles = useMemo(
    () => festivalListStyle(theme, locationInfo),
    [theme, locationInfo]
  );
  return (
    <>
      <section css={styles.section1}>
        <div css={styles.sec1TextBox}>
          <h1 css={styles.h1}>{contentMap[condition].title}</h1>
          <p css={styles.h1Eng}>{locationInfo}</p>
        </div>
      </section>
      <section css={styles.section2}>
        <h2 css={styles.h2}>
          <span css={styles.searchKeyword}>{searchParamsCity}</span>
          의 <span css={styles.searchKeyword}>'{[searchParamsCity,searchParamsKeyword]}'</span>에 대한 검색 결과입니다.
        </h2>
        <InputForSearch type ={locationInfo} locationInfo={locationInfo} condition={condition} placeHolder={`${searchParamsCity} ${searchParamsKeyword}`}/>
      </section>
    </>
  );
};

const festivalListStyle = (theme: ThemeType, locationInfo: LocatType) => ({
  section1: css({
    backgroundImage: `url(${backgroundImages[locationInfo]})`,
    position: 'relative',
    ...theme.background.listPageTop,
  }),
  sec1TextBox: css({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: '7.56rem',
    marginBottom: '2.75rem',
  }),
  searchKeyword: css({
    fontWeight: 600,
  }),
});
export default ListBySearch;
