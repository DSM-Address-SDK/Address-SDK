import Input from "components/Input";
import { useState } from "react";

function AddressSDK() {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <Input setKeyword={setKeyword} />
    </>
  );
}

export default AddressSDK;
