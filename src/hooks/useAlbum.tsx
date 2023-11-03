import { IAlbum } from "@/models";
import { setLoadingApi } from "@/redux/slices/loaderApiSlice";
import { AppStore } from "@/redux/store";
import { getAlbumsByBand } from "@/services/musicService";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useAlbum(bandId: number) {
  const dispatch = useDispatch();
  const isLoadingApi = useSelector((state: AppStore) => state.loader);

  const [albums, setAlbums] = useState<IAlbum[]>([]);
  useEffect(() => {
    dispatch(setLoadingApi(true));
    getAlbumsByBand(Number(bandId))
      .then((res: AxiosResponse<IAlbum[]>) => setAlbums(res.data))
      .finally(() => dispatch(setLoadingApi(false)));
    // eslint-disable-next-line
  }, []);
  return {
    albums,
    isLoadingApi,
  };
}
