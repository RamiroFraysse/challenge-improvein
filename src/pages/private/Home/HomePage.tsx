import { useBand } from "@/hooks";
import { Container, Layout, ButtonSort, HomeTitle } from "./styled-components";
import HomeList from "./components/HomeList";
import MemoizedHomeHeader from "./components/HomeHeader";
import { LIMIT_PER_PAGE } from "@/utilities";

function Home() {
  const {
    bands,
    isLoadingApi,
    onFilterData,
    onSortData,
    onSetCurrentPage,
    isFinishPage,
  } = useBand();

  if (bands.length === 0)
    return (
      <Layout>
        <HomeTitle>Cargando..</HomeTitle>
      </Layout>
    );
  return (
    <Layout>
      <MemoizedHomeHeader onFilterData={onFilterData} onSortData={onSortData} />
      <Container>
        <HomeList bands={bands} />
        {bands.length >= LIMIT_PER_PAGE && !isFinishPage && (
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
