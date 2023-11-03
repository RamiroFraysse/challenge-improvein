import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { PrivateRoutes, PublicRoutes } from "../routes/routes";
import { AppStore } from "@/redux/store";

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate replace to={PrivateRoutes.PRIVATE} />
);

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => {
    return store.user;
  });

  console.log({ userState });

  return userState.email !== "" ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
