export interface KeywordSearchParams {
  numOfRows: number;
  pageNo: number;
  MobileOS: string;
  MobileApp: string;
  _type: string;
  listYN: 'Y' | 'N';
  arrange: 'A' | 'C' | 'D' | 'O' | 'Q' | 'R';
  keyword: string;
  contentTypeId: number;
  serviceKey: string;
}

export interface SearchData {
  addr1?: string;
  addr2?: string;
  areacode?: string;
  booktour?: string;
  cat1?: string;
  cat2?: string;
  cat3?: string;
  contentid?: string;
  contenttypeid: string;
  createdtime?: string;
  firstimage?: string;
  firstimage2?: string;
  cpyrhtDivCd?: string;
  mapx?: string;
  mapy?: string;
  mlevel?: string;
  modifiedtime?: string;
  sigungucode?: string;
  tel?: string;
  title?: string;
}

export interface GetKeywordSearchDataDTO {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: {
        item: SearchData[];
      };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}
