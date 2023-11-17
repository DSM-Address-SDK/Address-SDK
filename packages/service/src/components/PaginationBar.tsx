interface PaginationBarProps {
  SearchResultCount: number;
  //검색결과 주소목록 길이입니다.
  choosedPage: number;
  setChoosedPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationBar = ({
  SearchResultCount,
  choosedPage,
  setChoosedPage,
}: PaginationBarProps) => {
  const numberArr = Array.from(
    { length: Math.ceil(SearchResultCount / 10) },
    (_, index) => index + 1
  );

  return (
    <div className="w-full flex justify-center gap-2 my-[30px]">
      {numberArr.map((num) => (
        <div
          onClick={() => setChoosedPage(num)}
          key={num}
          className={` ${choosedPage === num ? "text-white" : "text-black"} ${
            choosedPage === num ? "bg-highlight" : "bg-white"
          } flex items-center justify-center w-[30px] h-[30px] rounded-xl text-[16px] font-bold`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default PaginationBar;
