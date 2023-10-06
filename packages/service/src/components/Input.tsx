import { FAVICON_PATH } from "constants/asset";
import { InputHTMLAttributes, SetStateAction } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setState: React.Dispatch<SetStateAction<string>>;
}

const Input = ({ setState, ...props }: InputProps) => {
  return (
    <form>
      <div className="relative w-full border-b border-black text-base pl-4 pr-[76px] bg-white">
        <input
          className="py-3.5 outline-none font-regular w-full"
          placeholder="도로명, 건물명, 지번검색"
          {...props}
        />
        <button
          type="button"
          onClick={() => setState("")}
          className="absolute right-12 top-3.5"
        >
          <img src={FAVICON_PATH["XBtn"]} />
        </button>
        <button type="button" className="absolute right-4 top-3.5">
          <img src={FAVICON_PATH["Search"]} />
        </button>
      </div>
    </form>
  );
};

export default Input;
