import { useQuery } from '@tanstack/react-query';
// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { getKeywordSearchData } from '@/api';
// import { SearchData } from '@/api/api.dto';

export const useSearchData = (
  keyword: string,
  page: number,
  contentTypeId: number,
  arrange: string,
  list: string
) =>
  useQuery({
    queryKey: ['/searchKeyword1', keyword, page, contentTypeId, arrange, list],
    queryFn: () =>
      getKeywordSearchData(page, keyword, contentTypeId, arrange, list),
    enabled: !!keyword && !!contentTypeId,
  });
