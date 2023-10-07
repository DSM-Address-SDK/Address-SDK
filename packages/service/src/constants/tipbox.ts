type TipType = {
  text: string;
  example: string;
};

export const TIPS: TipType[] = [
  { text: "도로명 + 건물번호", example: "예) 세종대로 110, 서빙고로 137" },
  { text: "지역명(동/리) + 번지", example: "예) 여수동 200, 인계동 1111" },
  { text: "건물명, 아파트명", example: "예) 반포힐스테이트, 래미안원베일리" },
  { text: "사서함명", example: "예) 서울강남우체국사서함" },
];
