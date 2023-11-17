const AddressSearchWarning = () => {
  return (
    <div className="w-full px-[16px] py-[12px] flex flex-col gap-[7px]">
      <p className="text-[14px] font-bold leading-[18.2px]">
        검색 결과가 너무 많아요.
      </p>
      <p className="text-[14px] leading-[22px] text-black font-regular">
        더욱 정확한 결과를 찾으시려면{" "}
        <b className="text-highlight font-regular">
          도로명+건물번호, 지역명+지번, 지역명+건물명
        </b>{" "}
        키워드를 활용하여 검색해주세요
      </p>
    </div>
  );
};

export default AddressSearchWarning;
