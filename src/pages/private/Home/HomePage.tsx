import { useBand } from "@/hooks";
import { Container, Layout, ButtonSort } from "./styled-components";
import HomeList from "./components/HomeList";
import MemoizedHomeHeader from "./components/HomeHeader";
import { LIMIT_PER_PAGE } from "@/utilities";

function Home() {
  const { bands, isLoadingApi, onFilterData, onSortData, onSetCurrentPage } =
    useBand();
  return (
    <Layout>
      <MemoizedHomeHeader onFilterData={onFilterData} onSortData={onSortData} />
      <Container>
        <HomeList bands={bands} />
        {bands.length >= LIMIT_PER_PAGE && (
          <ButtonSort
            onClick={() => onSetCurrentPage()}
            disabled={isLoadingApi ? true : false}
          >
            {isLoadingApi ? "Cargando ..." : "Load more"}
          </ButtonSort>
        )}
      </Container>
    </Layout>
  );
}
export default Home;
