import SearchInput from "components/SearchInput";
import { useState } from "react";

function AddressSDK() {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <SearchInput setKeyword={setKeyword} />
    </>
  );
}

export default AddressSDK;
