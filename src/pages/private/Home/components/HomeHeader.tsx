import { memo, useState } from "react";
import {
  ButtonSort,
  HomeHeaderStyled,
  InputFilter,
} from "../styled-components";

interface Props {
  onFilterData: (filter: string) => void;
  onSortData: (orderDirection: string) => void;
}

function HomeHeader({ onFilterData, onSortData }: Props) {
  const [filter, setFilter] = useState<string>("");
  const [orderDirection, setOrderDirection] = useState<string>("asc");
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    onFilterData(e.target.value);
  };
  const handleSort = () => {
    if (orderDirection === "asc") {
      setOrderDirection("desc");
    } else {
      setOrderDirection("asc");
    }
    onSortData(orderDirection);
  };
  return (
    <HomeHeaderStyled>
      {/* <HomeTitle>Bands</HomeTitle> */}
      <InputFilter
        value={filter}
        placeholder="filter"
        onChange={handleFilter}
      />
      <ButtonSort onClick={handleSort}>{orderDirection}</ButtonSort>
    </HomeHeaderStyled>
  );
}
const MemoizedHomeHeader = memo(HomeHeader);

export default MemoizedHomeHeader;
