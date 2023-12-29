import { FAVICON_PATH } from "constants/asset";
import {
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import AutoComplete from "./AutoComplete";
import { useCombobox } from "downshift";
import { hangulIncludes, chosungIncludes } from "@toss/hangul";
import Parser from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { useAutoComplete } from "api/address";
import useQueryDebounce from "hooks/useQueryDebounce";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setKeyword: React.Dispatch<SetStateAction<string>>;
}

const SearchInput = ({ setKeyword, ...props }: InputProps) => {
  const [items, setItems] = useState<string[]>([]);

  const navigate = useNavigate();

  function getAddressFilter(inputValue?: string) {
    // any는 명세 나오면 타입 지정할 예정
    return function addressFilter(address: string) {
      return (
        !inputValue ||
        hangulIncludes(address, inputValue) ||
        chosungIncludes(address, inputValue)
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
      setItems(data?.items.filter(getAddressFilter(inputValue)) || []);
    },
    items,
    itemToString(item) {
      return item || "";
    },
  });

  const debouncedSearchInput = useQueryDebounce(inputValue);
  const { data } = useAutoComplete(debouncedSearchInput);

  useEffect(() => {
    setItems(data?.items || []);
  }, [data]);

  function Highlight(textToSearch: string) {
    if (textToSearch.includes(inputValue)) {
      const highlightedText = textToSearch.replace(
        inputValue,
        `<b>${inputValue}</b>`
      );

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
          navigate(`/address`);
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
              onClick={() => {
                navigate("/");
                reset();
              }}
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
                <span className="[&>b]:text-highlight [&>b]:font-regular text-[16px] font-regular text-ellipsis overflow-hidden whitespace-nowrap">
                  {Parser(Highlight(item))}
                </span>
              </AutoComplete>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchInput;
