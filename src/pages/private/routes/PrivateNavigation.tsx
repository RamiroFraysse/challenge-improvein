import { PrivateRoutes } from "@/routes";
import { Navigate, Route } from "react-router";
import RoutesWithNotFound from "@/routes/RoutesWithNotFound";
import { lazy } from "react";
import { Navbar } from "rf-sb-components";
import BandPage from "../Home/Band/BandPage";
import { useAuth } from "@/hooks";

const Home = lazy(() => import("../Home/HomePage"));

function Private() {
  const { logout } = useAuth();
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
        background="linear-gradient(to right, #6EE7B7, #1d4e89)"
        stylesNav={{ position: "fixed", zIndex: 1 }}
        stylesActions={{ backgroundColor: "#252d4a", color: "#fff" }}
        logo={<>improvein</>}
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
