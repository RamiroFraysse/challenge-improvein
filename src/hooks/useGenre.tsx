import { IGenre } from "@/models";
import { setLoadingApi } from "@/redux/slices/loaderApiSlice";
import { AppStore } from "@/redux/store";
import { getGenreByCode } from "@/services/musicService";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useGenre(code: string) {
  console.log(code);
  const dispatch = useDispatch();
  const isLoadingApi = useSelector((state: AppStore) => state.loader);

  const [genre, setGenre] = useState<string>("");
  useEffect(() => {
    dispatch(setLoadingApi(true));
    getGenreByCode(code)
      .then((res: AxiosResponse<IGenre[]>) => {
        setGenre(res.data[0].name);
      })
      .finally(() => dispatch(setLoadingApi(false)));
    // eslint-disable-next-line
  }, []);
  return {
    genre,
    isLoadingApi,
  };
}
