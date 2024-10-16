import Festival from '@/assets/images/festival.png';
import Lodgement from '@/assets/images/lodgment.png';
import Attraction from '@/assets/images/attraction.png';
import { css, useTheme } from '@emotion/react';
import { useMemo, useEffect, useCallback } from 'react';
import { ThemeType } from '@/assets/styles/theme';
import { useLocation, useSearchParams } from 'react-router-dom';
import InputForSearch from '@/components/common/InputForSearch';
import ListItem from '@/components/listItem';
import { useInfiniteSearch } from '@/api';
import { useInView } from 'react-intersection-observer';
import { useQueryClient } from '@tanstack/react-query';
type LocatType = 'Festival' | 'Lodgement' | 'Attraction';
const backgroundImages: Record<LocatType, string> = {
  Festival,
  Lodgement,
  Attraction,
};

const ListBySearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchParamsCity = searchParams.get('city') || '서울';
  const searchParamsKeyword = searchParams.get('keyword') || '';
  const contentTypeId = searchParams.get('contentType') || 12;
  const theme = useTheme() as ThemeType;
  const location = useLocation();
  const locationInfo = location.state.locationInfo;
  const condition = location.state.condition;
  const queryClient = useQueryClient();
  const styles = useMemo(
    () => ListPageStyles(theme, locationInfo),
    [theme, locationInfo]
  );
  const combinedKeyword = useMemo(
    () => `${searchParamsCity}${searchParamsKeyword}`.trim(),
    [searchParamsCity, searchParamsKeyword]
  );
  const queryKey: [string, string, number] = useMemo(
    () => ['searchKeywordInfinite', combinedKeyword, Number(contentTypeId)],
    [combinedKeyword, contentTypeId]
  );
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteSearch(
    queryKey,
    combinedKeyword,
    Number(contentTypeId) // 문자열을 숫자로 변환
  );

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  const resetAndRefetch = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: queryKey });
    refetch();
  }, [queryClient, queryKey, refetch]);

  useEffect(() => {
    resetAndRefetch();
  }, [combinedKeyword, contentTypeId, resetAndRefetch]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);
  const searchResult = data?.pages.flatMap((page) => page.items.item);
  return (
    <>
      <section css={styles.section1}>
        <div css={styles.sec1TextBox}>
          <h1 css={styles.h1}>{locationInfo}</h1>
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
      <div ref={ref}>
        {isFetchingNextPage
          ? '로딩 중...'
          : hasNextPage
            ? '더 보기'
            : '모든 결과를 불러왔습니다.'}
      </div>
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
