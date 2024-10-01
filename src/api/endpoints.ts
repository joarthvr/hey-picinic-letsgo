import { apiRequester } from './index';
import { KeywordSearchParams, SearchData, APIResponse } from './interfaces';

export const getKeywordSearch = async (
  params: Omit<
    KeywordSearchParams,
    'serviceKey' | 'MobileOS' | 'MobileApp' | '_type'
  >
): Promise<SearchData[]> => {
  try {
    const response = await apiRequester.get<APIResponse>('/searchKeyword1', {params:{
      ...params,
      serviceKey: import.meta.env.VITE_API_SERVICE_KEY,
      MobileOS: 'ETC',
      MobileApp: 'AppTest',
      _type: 'json',
    }});
    console.log(params);
    console.log(response);
    return response.data.response.body.items.item;
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    throw error;
  }
};
