import { useState } from "react";

interface IAddressProps {
  zipcode: string;
  isAdress: boolean;
  kMainZipZuso: string;
  kSubZipZuso?: string[];
  englishMainZipZuso: string;
  englishSubZipZuso?: string[];
}

const AddressCard = ({
  zipcode,
  isAdress,
  kMainZipZuso,
  kSubZipZuso,
  englishMainZipZuso,
  englishSubZipZuso,
}: IAddressProps) => {
  const [isShowKorean, setIsShowKorean] = useState<boolean>(true);
  const [isShowAllSubZipZuso, setIsShowAllSubZipZuso] =
    useState<boolean>(false);

  return (
    <div className="w-full px-4 py-5 bg-white">
      <div className="flex items-end justify-between w-full">
        <div className="text-base font-bold text-highlight">{zipcode}</div>
        <button
          className="text-xs font-normal text-gray"
          onClick={() => setIsShowKorean((prev) => !prev)}
        >
          {isShowKorean ? "영문보기" : "한글보기"}
        </button>
      </div>
      <div className="text-base font-normal text-black">
        {isShowKorean ? kMainZipZuso : englishMainZipZuso}
      </div>
      {!!kSubZipZuso && !!englishSubZipZuso && (
        <div className="flex w-full gap-4 mt-2">
          <div className="w-[46px] h-[19px] text-xs font-medium text-center border border-gray text-gray">
            {isAdress ? "도로명" : "지번"}
          </div>
          <div className="flex flex-col justify-start w-full gap-1">
            <div className="text-xs font-normal text-gray">
              {isShowKorean ? kSubZipZuso[0] : englishSubZipZuso[0]}
            </div>
            {kSubZipZuso.length > 1 &&
              (isShowAllSubZipZuso ? (
                isShowKorean ? (
                  kSubZipZuso
                    .filter((item, i) => i >= 1)
                    .map((item) => (
                      <div className="text-xs font-normal text-gray">
                        {item}
                      </div>
                    ))
                ) : (
                  englishSubZipZuso
                    .filter((item, i) => i >= 1)
                    .map((item) => (
                      <div className="text-xs font-normal text-gray">
                        {item}
                      </div>
                    ))
                )
              ) : (
                <button
                  className="text-xs font-normal text-highlight w-max"
                  onClick={() => setIsShowAllSubZipZuso(true)}
                >
                  해당 위치의 지번 주소 2개 더 보기
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
