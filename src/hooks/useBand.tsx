import { IBand } from "@/models";
import { setLoadingApi } from "@/redux/slices/loaderApiSlice";
import { AppStore } from "@/redux/store";
import { getPaginateBands } from "@/services";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useBand() {
  const dispatch = useDispatch();
  const isLoadingApi = useSelector((state: AppStore) => state.loader);
  const [bands, setBands] = useState<IBand[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFinishPage, setIsFinishPage] = useState<boolean>(false);

  const getInitialData = () => {
    dispatch(setLoadingApi(true));
    getPaginateBands(currentPage)
      .then((res: AxiosResponse<IBand[]>) => {
        setBands(res.data);
      })
      .finally(() => {
        dispatch(setLoadingApi(false));
      });
  };

  const getMoreData = (page: number) => {
    dispatch(setLoadingApi(true));
    getPaginateBands(page)
      .then((res: AxiosResponse<IBand[]>) => {
        if (res.data.length === 0) {
          setIsFinishPage(true);
          setCurrentPage(currentPage - 1);
        }
        setBands((prevBands) => prevBands.concat(res.data));
      })
      .finally(() => {
        dispatch(setLoadingApi(false));
      });
  };

  const onSortData = (orderDirection: string) => {
    if (orderDirection === "asc") {
      const dataSorted = bands.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setBands([...dataSorted]);
    } else {
      const dataSorted = bands.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      setBands([...dataSorted]);
    }
  };

  const onFilterData = (filter: string) => {
    setCurrentPage(1);
    dispatch(setLoadingApi(true));
    getPaginateBands(currentPage, filter)
      .then((res: AxiosResponse<IBand[]>) => {
        setBands(res.data);
      })
      .finally(() => {
        dispatch(setLoadingApi(false));
      });
  };

  const onSetCurrentPage = () => {
    setCurrentPage(currentPage + 1);
    getMoreData(currentPage + 1);
  };

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line
  }, []);

  return {
    bands,
    currentPage,
    onSetCurrentPage,
    onSortData,
    isLoadingApi,
    isFinishPage,
    onFilterData,
  };
}
export default useBand;
