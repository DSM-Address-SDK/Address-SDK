import AddressCard from "components/AddressCard";
import AddressSearchWarning from "components/AddressSearchWarning";
import { SAMPLEADRESS } from "constants/AddressCard";

interface AddressListProps {
  keyword: string;
}

const AddressList = ({ keyword }: AddressListProps) => {
  return (
    <>
      <AddressSearchWarning />
      <AddressCard
        zipcode={SAMPLEADRESS.zipcode}
        isAdress={SAMPLEADRESS.isAdress}
        kMainZipZuso={SAMPLEADRESS.kMainZipZuso}
        kSubZipZuso={SAMPLEADRESS.kSubZipZuso}
        englishMainZipZuso={SAMPLEADRESS.englishMainZipZuso}
        englishSubZipZuso={SAMPLEADRESS.englishSubZipZuso}
      />
      <AddressCard
        zipcode={SAMPLEADRESS.zipcode}
        isAdress={SAMPLEADRESS.isAdress}
        kMainZipZuso={SAMPLEADRESS.kMainZipZuso}
        kSubZipZuso={SAMPLEADRESS.kSubZipZuso}
        englishMainZipZuso={SAMPLEADRESS.englishMainZipZuso}
        englishSubZipZuso={SAMPLEADRESS.englishSubZipZuso}
      />
    </>
  );
};

export default AddressList;
