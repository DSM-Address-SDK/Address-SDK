import { useState } from "react";
import { AddressType, LanguageType } from "api/address/type";

const AddressCard = ({
  postalCode,
  representAddressNameKor,
  representAddressNameEng,
  jibuns,
}: AddressType) => {
  const [languageType, setLanguageType] = useState<keyof LanguageType>("kor");
  const [isShowAllSubZipZuso, setIsShowAllSubZipZuso] =
    useState<boolean>(false);

  const isShowKorean = languageType === "kor";

  return (
    <div className="w-full px-4 py-5 bg-white">
      <div className="flex items-end justify-between w-full">
        <div className="text-base font-bold text-highlight">{postalCode}</div>
        <button
          className="text-xs font-normal text-gray"
          onClick={() =>
            setLanguageType((prev) => (prev === "kor" ? "eng" : "kor"))
          }
        >
          {isShowKorean ? "영문보기" : "한글보기"}
        </button>
      </div>
      <div className="text-base font-normal text-black">
        {isShowKorean ? representAddressNameKor : representAddressNameEng}
      </div>
      {jibuns.length !== 0 && (
        <div className="flex w-full gap-4 mt-2">
          <div className="w-[46px] h-[19px] text-xs font-medium text-center border border-gray text-gray">
            지번
          </div>
          <div className={"flex flex-col justify-start w-full"}>
            <div
              className={`flex flex-col justify-start w-full gap-1 ${
                !isShowAllSubZipZuso && "max-h-5"
              } overflow-hidden`}
            >
              {jibuns?.map((item) => (
                <div key={item.kor} className="text-xs font-normal text-gray">
                  {item[languageType]}
                </div>
              ))}
            </div>
            {!isShowAllSubZipZuso && jibuns.length > 1 && (
              <button
                className="text-xs font-normal text-highlight w-max"
                onClick={() => setIsShowAllSubZipZuso(true)}
              >
                해당 위치의 지번 주소 {jibuns.length - 1}개 더 보기
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
