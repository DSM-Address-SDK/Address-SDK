export interface AutoCompleteResponse {
  items: string[];
}

export type LanguageType = {
  kor: string;
  eng: string;
};

export type AddressType = {
  // 0 : 대표 주소 = 도로명, 1 : 대표 주소 = 지번, 2 : 사서함
  type: 0 | 1 | 2;
  postalCode: string;
  representAddressNameKor: string;
  representAddressNameEng: string;
  jibuns: LanguageType[];
};

export interface SearchAddressResponse {
  items: AddressType[];
}

export interface CountAddressResponse {
  totalPageCount: number;
}
