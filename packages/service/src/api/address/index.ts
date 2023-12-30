import { useQuery } from "@tanstack/react-query";
import { instance } from "api/axios";
import {
  AutoCompleteResponse,
  CountAddressResponse,
  SearchAddressResponse,
} from "./type";

const ROUTER = "address";

export const useAutoComplete = (keyword: string) => {
  return useQuery(
    ["autoComplete", keyword],
    async () => {
      const { data } = await instance.get<AutoCompleteResponse>(
        `/${ROUTER}/help?keyword=${keyword}`
      );
      return data;
    },
    {
      enabled: !!keyword,
    }
  );
};

export const GetSearchAddress = (page: number, keyword: string) => {
  const response = async () => {
    const { data } = await instance.get<SearchAddressResponse>(
      `${ROUTER}/search?page=${page}&keyword=${keyword}`
    );
    return data;
  };
  return useQuery(["search", page, keyword], response);
};

export const GetCountAddressPage = (keyword: string) => {
  const response = async () => {
    const { data } = await instance.get<CountAddressResponse>(
      `${ROUTER}/search/count?keyword=${keyword}`
    );
    return data;
  };
  return useQuery(["count", keyword], response);
};
