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

export const getKeywordSearchData = async (
  page: number,
  keyword: string,
  contentTypeId: number,
  arrange: string,
  list: string
) => {
  try {
    const response = await axios.get<GetKeywordSearchDataDTO>(
      `${API_URL}/searchKeyword1`,
      {
        params: {
          ...commonParams(page),
          keyword,
          contentTypeId,
          arrange,
          listYN: list,
        },
      }
    );
    if (response.data.response.header.resultCode !== '0000') {
      throw new Error(
        response.data.response.header.resultMsg || 'API 호출 실패'
      );
    }
    return response.data.response.body.items;
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    throw error;
  }
};
