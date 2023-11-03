import { Card } from "rf-sb-components";
import { ContainerList } from "../styled-components";
import { IBand } from "@/models";
import { useNavigate } from "react-router";

function HomeList({ bands }: { bands: IBand[] }) {
  const navigate = useNavigate();

  return (
    <ContainerList>
      {bands.map((band: IBand) => (
        <Card
          key={band.id}
          id={band.id}
          title={band.name}
          background={"#efefef"}
          subtitle={`${band.country} ${band.year}`}
          cardStyles={{
            minHeight: "18rem",
            position: "relative",
            boxShadow: "4px 1px 0px #999",
          }}
          actionStyles={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            margin: "auto",
            alignItems: "center",
            borderRadius: "0rem 0rem 1rem 1rem",
          }}
          navActions={[
            {
              label: "show more",
              onClick: () => {
                console.log({ id: band.id });
                navigate(`${band.id}`, { state: { data: band } });
              },
            },
          ]}
        >
          <>
            {band.members.map((member) => (
              <span key={member.name}>{member.name}</span>
            ))}
          </>
        </Card>
      ))}
    </ContainerList>
  );
}
export default HomeList;
