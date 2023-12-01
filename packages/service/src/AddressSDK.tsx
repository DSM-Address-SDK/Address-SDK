import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchInput from "components/SearchInput";
import { useState } from "react";
import TipBox from "pages/TipBox";
import AddressList from "pages/AddressList";

function AddressSDK() {
  const [keyword, setKeyword] = useState("");
  return (
    <BrowserRouter>
      <SearchInput setKeyword={setKeyword} />
      <Routes>
        <Route path="/" element={<TipBox />} />
        <Route path="/address" element={<AddressList keyword={keyword} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AddressSDK;
