import { PrivateRoutes } from "@/routes";
import { Navigate, Route, useNavigate } from "react-router";
import RoutesWithNotFound from "@/routes/RoutesWithNotFound";
import { lazy } from "react";
import { Navbar } from "rf-sb-components";
import BandPage from "../Home/Band/BandPage";
import { useAuth } from "@/hooks";
import {
  MAIN_BLUE_COLOR,
  MAIN_GREEN_COLOR,
  SECONDARY_BLUE_COLOR,
} from "@/utilities";

const Home = lazy(() => import("../Home/HomePage"));

function Private() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const navActions = [
    {
      label: "logout",
      onClick: () => {
        logout();
      },
    },
  ];
  return (
    <>
      <Navbar
        background={`linear-gradient(to right, ${MAIN_GREEN_COLOR}, ${SECONDARY_BLUE_COLOR})`}
        stylesNav={{ position: "fixed", zIndex: 1 }}
        stylesActions={{
          backgroundColor: `${MAIN_BLUE_COLOR}`,
          color: "#fff",
        }}
        logo={
          <a
            onClick={() => {
              navigate(PrivateRoutes.BANDS, { replace: true });
            }}
          >
            improvein
          </a>
        }
        navActions={navActions}
      />
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.BANDS} />} />
        <Route path={PrivateRoutes.BANDS} element={<Home />} />
        <Route path={`${PrivateRoutes.BANDS}/:bandId`} element={<BandPage />} />
      </RoutesWithNotFound>
    </>
  );
}
export default Private;
