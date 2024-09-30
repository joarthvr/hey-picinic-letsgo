import apiRequester from './instance';

interface KeyWordBasedListParams {
  numOfRows?: number;
  pageNo?: number;
  listYN?: 'Y' | 'N';
  arrange?: 'A' | 'C' | 'D' | 'O';
  keyword: string;
  contentTypeId: number;
}
export const getKeyWordBasedList = (params: KeyWordBasedListParams) =>
  apiRequester.get('/keyWordBasedList', { params });
