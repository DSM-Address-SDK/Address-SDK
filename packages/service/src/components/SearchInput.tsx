import { FAVICON_PATH } from "constants/asset";
import { InputHTMLAttributes, SetStateAction, useState } from "react";
import AutoComplete from "./AutoComplete";
import { useCombobox } from "downshift";
import { hangulIncludes, chosungIncludes } from "@toss/hangul";
import Parser from "html-react-parser";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setKeyword: React.Dispatch<SetStateAction<string>>;
}

// 임시값
const addressList = [
  {
    orgDisplay: "서울특별시 종로구 세종대로",
    highlightedDisplay: "서울특별시 종로구 세종대로",
  },
  {
    orgDisplay: "서울특별시 중구 세종대로",
    highlightedDisplay: "서울특별시 중구 세종대로",
  },
  {
    orgDisplay: "서울특별시 중구 세종대로1길",
    highlightedDisplay: "서울특별시 중구 세종대로1길",
  },
  {
    orgDisplay: "서울특별시 중구 세종대로2가길",
    highlightedDisplay: "서울특별시 중구 세종대로2가길",
  },
  {
    orgDisplay: "서울특별시 중구 세종대로2길",
    highlightedDisplay: "서울특별시 중구 세종대로2길",
  },
  {
    orgDisplay: "서울특별시 중구 세종대로2나길",
    highlightedDisplay: "서울특별시 중구 세종대로2나길",
  },
  {
    orgDisplay: "서울특별시 중구 세종대로3길",
    highlightedDisplay: "서울특별시 중구 세종대로3길",
  },
  {
    orgDisplay: "서울특별시 중구 세종대로4길",
    highlightedDisplay: "서울특별시 중구 세종대로4길",
  },
  {
    orgDisplay: "서울특별시 중구 세종대로5길",
    highlightedDisplay: "서울특별시 중구 세종대로5길",
  },
  {
    orgDisplay: "경기도 여주시 세종대왕면",
    highlightedDisplay: "경기도 여주시 세종대왕면",
  },
];

const SearchInput = ({ setKeyword, ...props }: InputProps) => {
  const [items, setItems] = useState(addressList);

  function getAddressFilter(inputValue?: string) {
    // any는 명세 나오면 타입 지정할 예정
    return function addressFilter(address: any) {
      return (
        !inputValue ||
        hangulIncludes(address.orgDisplay, inputValue) ||
        chosungIncludes(address.orgDisplay, inputValue) ||
        hangulIncludes(address.highlightedDisplay, inputValue) ||
        chosungIncludes(address.highlightedDisplay, inputValue)
      );
    };
  }

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getItemProps,
    inputValue,
    reset,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(addressList.filter(getAddressFilter(inputValue)));
    },
    items,
    itemToString(item) {
      return item ? item.orgDisplay : "";
    },
  });

  function Highlight(textToSearch: string) {
    if (textToSearch.includes(inputValue)) {
      const searchString = inputValue.toLowerCase();
      const startIndex = textToSearch.toLowerCase().indexOf(searchString);
      const highlightedText =
        textToSearch.substring(0, startIndex) +
        "<b>" +
        searchString +
        "</b>" +
        textToSearch.substring(startIndex + searchString.length);
      return highlightedText;
    } else {
      return textToSearch;
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setKeyword(inputValue);
        }}
      >
        <div className="relative w-full border-b border-black text-base pl-4 pr-[76px] bg-white">
          <input
            type="search"
            className="py-3.5 outline-none font-regular w-full"
            placeholder="도로명, 건물명, 지번검색"
            autoComplete="off"
            {...getInputProps()}
            {...props}
          />

          {!!inputValue && (
            <button
              type="button"
              onClick={() => reset()}
              className="absolute right-12 top-3.5"
            >
              <img src={FAVICON_PATH["XBtn"]} />
            </button>
          )}
          <button type="submit" className="absolute right-4 top-3.5">
            <img src={FAVICON_PATH["Search"]} />
          </button>
        </div>
      </form>
      <ul
        className={`absolute w-full bg-white z-10 ${
          !(isOpen && items.length) && "hidden"
        }`}
        {...getMenuProps()}
      >
        {inputValue &&
          isOpen &&
          items.map((item, index) => (
            <li key={index} {...getItemProps({ item, index })}>
              <AutoComplete>
                <span className="[&>b]:text-hightlight [&>b]:font-regular text-[16px] font-regular text-ellipsis overflow-hidden whitespace-nowrap">
                  {Parser(Highlight(item.orgDisplay))}
                </span>
              </AutoComplete>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchInput;
