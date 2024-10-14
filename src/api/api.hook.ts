import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getKeywordSearchData } from '@/api';

export const useInfiniteSearch = (
  keyword: string,
  page: number,
  contentTypeId: number,
  arrange: string,
  list: string
) =>
  useInfiniteQuery({
    queryKey: ['searchKeywordInfinite'],
    queryFn: () =>
      getKeywordSearchData(page, keyword, contentTypeId, arrange, list),
    getNextPageParam: (lastPage, pages) => {
      const totalPage = Math.ceil(lastPage.totalCount / 10);
      console.log(pages);
      return lastPage.pageNo < totalPage
        ? (page = lastPage.pageNo + 1)
        : undefined;
    },
    initialPageParam: 1,
  });
