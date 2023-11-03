import { useLocation, useParams } from "react-router";
import {
  Container,
  ContainerList,
  HomeTitle,
  Layout,
  SubTitle,
} from "../styled-components";
import { Card } from "rf-sb-components";
import { IAlbum, IMember } from "@/models";
import { useAlbum, useGenre } from "@/hooks";

export function BandPage() {
  const params = useParams();
  const bandId = params.bandId;
  const location = useLocation();
  const bandReceived = location.state?.data;
  const { albums, isLoadingApi } = useAlbum(Number(bandId));
  const { genre } = useGenre(bandReceived.genreCode);
  console.log({ genre });
  if (isLoadingApi)
    return (
      <Layout>
        <HomeTitle>Cargando..</HomeTitle>
      </Layout>
    );

  if (albums.length === 0)
    return (
      <Layout>
        <HomeTitle>Not albums founds</HomeTitle>
      </Layout>
    );
  return (
    <Layout>
      <Container>
        <HomeTitle>
          {bandReceived.name}, {genre}
        </HomeTitle>
        <SubTitle>
          {bandReceived.country} {bandReceived.year}
        </SubTitle>
        <SubTitle>
          Members:{" "}
          {bandReceived.members.map((member: IMember) => (
            <span>{member.name}, </span>
          ))}
        </SubTitle>
        <SubTitle>Albums:</SubTitle>

        <ContainerList>
          {albums.map((album: IAlbum) => (
            <Card
              key={album.id}
              id={album.id}
              title={album.name}
              background={"#efefef"}
              cardStyles={{ minHeight: "100%", boxShadow: "4px 1px 0px #999" }}
              subtitle={`${album.year}`}
            />
          ))}
        </ContainerList>
      </Container>
    </Layout>
  );
}
export default BandPage;
