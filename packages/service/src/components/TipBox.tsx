import { TIPS } from "constants/tipbox";

const TipBox = () => {
  return (
    <div className="px-9 py-12 bg-white h-[600px] w-full flex flex-col justify-start">
      <div className="flex flex-col gap-2">
        <p className="text-black text-[24px] font-bold leading-[31px]">Tip</p>
        <p className="text-black text-[14px] font-regular leading-[22px]">
          다음과 같은 방식으로 검색하시면 원하시는 결과를 더욱 빠르게 찾으실 수
          있어요.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {TIPS.map((value, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <p className="text-black text-[14px] font-regular leading-[18px]">
              {value.text}
            </p>
            <p className="text-highlight text-[14px] font-regular leading-[18px]">
              {value.example}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipBox;
