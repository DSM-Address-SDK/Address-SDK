import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetCountAddressPage, GetSearchAddress } from "api/address";
import AddressCard from "components/AddressCard";
import PaginationBar from "components/PaginationBar";
import AddressSearchWarning from "components/AddressSearchWarning";

interface AddressListProps {
  keyword: string;
}

const AddressList = ({ keyword }: AddressListProps) => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const { data: countAddressPage } = GetCountAddressPage(keyword ?? "");
  const { data: searchAddress } = useQuery({
    queryKey: ["search", keyword, page],
    queryFn: () => GetSearchAddress(page, keyword),
    keepPreviousData: true,
    staleTime: 5000,
  });

  useEffect(() => {
    for (var i = 2; i <= Math.min(countAddressPage?.totalPageCount!, 5); i++) {
      queryClient.prefetchQuery({
        queryKey: ["search", keyword, page + 1],
        queryFn: () => GetSearchAddress(page + 1, keyword),
      });
    }
  }, [countAddressPage]);

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
