import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchKeywordData } from '@/api/api.dto';
import { SearchData } from '@/api/api.dto';

export const useSearchData = (keyword: string, page: number) =>
  useQuery({
    queryKey: ['/searchKeyword1', page, keyword],
    queryFn: () => getSearchKeywordData(page, keyword),
    enabled: true,
  });
