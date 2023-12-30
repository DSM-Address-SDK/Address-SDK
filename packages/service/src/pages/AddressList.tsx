import AddressCard from "components/AddressCard";
import { GetCountAddressPage, GetSearchAddress } from "api/address";
import AddressSearchWarning from "components/AddressSearchWarning";
import PaginationBar from "components/PaginationBar";
import { useEffect, useState } from "react";

interface AddressListProps {
  keyword: string;
}

const AddressList = ({ keyword }: AddressListProps) => {
  const [page, setPage] = useState(1);
  const { data: searchAddress } = GetSearchAddress(page, keyword ?? "");
  const { data: countAddressPage } = GetCountAddressPage(keyword ?? "");
  useEffect(() => {
    console.log(keyword, searchAddress?.items);
  }, [searchAddress]);
  return (
    <>
      {countAddressPage?.totalPageCount !== 0 && searchAddress?.items && (
        <AddressSearchWarning />
      )}
      {searchAddress?.items.map((item) => (
        <AddressCard key={item.representAddressNameKor} {...item} />
      ))}
      {countAddressPage?.totalPageCount !== 0 && (
        <PaginationBar
          countAddressPage={countAddressPage?.totalPageCount!}
          choosedPage={page}
          setChoosedPage={setPage}
        />
      )}
    </>
  );
};

export default AddressList;
