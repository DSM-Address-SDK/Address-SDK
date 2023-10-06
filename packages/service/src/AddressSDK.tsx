import Input from "components/Input";
import { useInput } from "hooks/useInput";

function AddressSDK() {
  const {
    form: search,
    onChange: onChangeSearch,
    setForm: setSearch,
  } = useInput("");

  return (
    <>
      <Input value={search} onChange={onChangeSearch} setState={setSearch} />
    </>
  );
}

export default AddressSDK;
