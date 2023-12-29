import { useQuery } from "@tanstack/react-query";
import { instance } from "api/axios";
import { AutoCompleteResponse } from "./type";

export const useAutoComplete = (keyword: string) => {
  return useQuery(
    ["autoComplete", keyword],
    async () => {
      const { data } = await instance.get<AutoCompleteResponse>(
        `/address/help?keyword=${keyword}`
      );
      return data;
    },
    {
      enabled: !!keyword,
    }
  );
};
