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
  postal_code: string;
  represent_address_name: string;
  jibuns: LanguageType[];
  road_names: LanguageType[];
  post: string | null;
};

export interface SearchAddressResponse {
  items: AddressType[];
}
