import { ReactNode } from "react";

const AutoComplete = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white w-full h-[45px] px-[16px] flex items-center border-solid border-footer border-b-[1px] cursor-pointer hover:bg-hover">
      {children}
    </div>
  );
};

export default AutoComplete;
