import Festival from '@/assets/images/festival.png';
import Lodgement from '@/assets/images/lodgment.png';
import Attraction from '@/assets/images/attraction.png';
import { css, useTheme } from '@emotion/react';
import { useMemo, useEffect } from 'react';
import { ThemeType } from '@/assets/styles/theme';
import { useLocation, useSearchParams } from 'react-router-dom';
import InputForSearch from '@/components/common/InputForSearch';
import ListItem from '@/components/listItem';
import { useInfiniteSearch } from '@/api';
import { useInView } from 'react-intersection-observer';
type LocatType = 'Festival' | 'Lodgement' | 'Attraction';
const backgroundImages: Record<LocatType, string> = {
  Festival,
  Lodgement,
  Attraction,
};
const contentMap = [
  { contentType: 15, title: '행사', image: Festival },
  { contentType: 32, title: '숙박', image: Lodgement },
  { contentType: 12, title: '관광지', image: Attraction },
];

const ListBySearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchParamsCity = searchParams.get('city');
  const searchParamsKeyword = searchParams.get('keyword') || '';
  const contentTypeId = searchParams.get('contentType') || 12;
  const theme = useTheme() as ThemeType;
  const location = useLocation();
  const locationInfo = location.state.locationInfo;
  const condition = location.state.condition;
  console.log(location);
  const styles = useMemo(
    () => ListPageStyles(theme, locationInfo),
    [theme, locationInfo]
  );
  const page = 1;
  const arrange = 'A'; // 예시 값, 정렬 방식
  const list = 'Y';
  const combinedKeyword = `${searchParamsCity}${searchParamsKeyword}`.trim();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isError,
    isLoading,
  } = useInfiniteSearch(
    combinedKeyword,
    page,
    Number(contentTypeId), // 문자열을 숫자로 변환
    arrange,
    list
  );
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (hasNextPage && !isFetching) fetchNextPage();
    return undefined;
  }, [searchParamsKeyword, searchParamsCity, contentTypeId, page, inView]);
  const searchResult = data?.pages.flatMap((page) => page.items.item);
  return (
    <>
      <section css={styles.section1}>
        <div css={styles.sec1TextBox}>
          <h1 css={styles.h1}>{contentMap[0].title}</h1>
          <p css={styles.h1Eng}>{locationInfo}</p>
        </div>
      </section>
      <section css={styles.section2}>
        <h2 css={styles.h2}>
          <span css={styles.searchKeyword}>{searchParamsCity}</span>의{' '}
          <span css={styles.searchKeyword}>
            '{[searchParamsCity, searchParamsKeyword]}'
          </span>
          에 대한 검색 결과입니다.
        </h2>
        <InputForSearch
          type={locationInfo}
          locationInfo={locationInfo}
          condition={condition}
          placeHolder={`${searchParamsCity} ${searchParamsKeyword}`}
        />
        {searchResult?.map((item) => (
          <ListItem
            key={item?.contentid || '없음'}
            h3={item?.title || '없음'}
            h4={item?.addr1 || '없음'}
            h5={item?.addr2 || '없음'}
            img={item?.firstimage || ''}
          />
        ))}
      </section>
      <div ref={ref}>렌더 중{inView}</div>
    </>
  );
};

const ListPageStyles = (theme: ThemeType, locationInfo: LocatType) => ({
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
    minHeight: '50rem',
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
export default ListBySearchPage;
