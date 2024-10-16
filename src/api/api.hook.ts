import { useInfiniteQuery } from '@tanstack/react-query';
import { getKeywordSearchData } from '@/api';

export const useInfiniteSearch = (
  queryKey: readonly [string, string, number],
  keyword: string,
  contentTypeId: number
) =>
  useInfiniteQuery({
    queryKey: queryKey,
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getKeywordSearchData(
        pageParam,
        keyword,
        contentTypeId
      );
      console.log(queryKey)
      if (!result) {
        throw new Error('No data returned from API');
      }
      return result;
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.pageNo || !lastPage.totalCount) {
        return undefined;
      }
      const totalPage = Math.ceil(lastPage.totalCount / 10);
      return lastPage.pageNo < totalPage ? lastPage.pageNo + 1 : undefined;
    },
    initialPageParam: 1,
  });
