import { SetStateAction } from "react";

interface PaginationBarProps {
  countAddressPage: number;
  //검색결과 주소목록 길이입니다.
  choosedPage: number;
  setChoosedPage: React.Dispatch<SetStateAction<number>>;
}

const PaginationBar = ({
  countAddressPage,
  choosedPage,
  setChoosedPage,
}: PaginationBarProps) => {
  const numberArr = Array.from(
    { length: Math.min(countAddressPage, 5) },
    (_, index) => index + 1
  );

  return (
    <div className="w-full flex justify-center gap-2 my-[30px]">
      {numberArr.map((index) => (
        <div
          onClick={() => setChoosedPage(index)}
          key={index}
          className={` cursor-pointer ${choosedPage === index ? "text-white" : "text-black"} ${
            choosedPage === index ? "bg-highlight" : "bg-white"
          } flex items-center justify-center w-[30px] h-[30px] rounded-xl text-[16px] font-bold`}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default PaginationBar;
