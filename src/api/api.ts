import axios from 'axios';
import { GetKeywordSearchDataDTO } from '@/api/api.dto';
const API_URL = import.meta.env.VITE_APP_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_SERVICE_KEY;


const commonParams = (page: number) => ({
  serviceKey: API_KEY,
  numOfRows: 10,
  pageNo: page,
  MobileOS: 'ETC',
  MobileApp: 'Apptest',
  _type: 'json',
});

export const getKeywordSearchData = (
  page: number,
  keyword: string,
  contentTypeId: number,
  arrange: string
) =>
  axios
    .get<GetKeywordSearchDataDTO>(`${API_URL}/searchKeyword1`, {
      params: {
        ...commonParams(page),
        keyword,
        contentTypeId: contentTypeId,
        arrange: arrange,
      },
    })
    .then((res) => res.data.response.body.items);
