import { IUser, IUserForm } from "@/models";
import { createUser, resetUser } from "@/redux/slices/userSlice";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { loginUser, logoutUser, registerUser } from "@/services";
import { SnackbarUtilities, getValidationError } from "@/utilities";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createUserAndNavigate = ({ email, id }: IUser) => {
    dispatch(
      createUser({
        email: email,
        id: id,
      })
    );
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  const login = async ({ email, password }: IUserForm) => {
    try {
      const result = await loginUser(email, password);
      createUserAndNavigate({
        email: result?.user?.email || "",
        id: result.user.uid,
      });
      // eslint-disable-next-line
    } catch (error: any) {
      console.log({ code: error.code });
      SnackbarUtilities.error(getValidationError(error.code));
    }
  };

  const register = async ({ email, password }: IUserForm) => {
    try {
      const result = await registerUser(email, password);
      createUserAndNavigate({
        email: result?.user?.email || "",
        id: result.user.uid,
      });
      // eslint-disable-next-line
    } catch (error: any) {
      console.log({ code: error.code });
      SnackbarUtilities.error(getValidationError(error.code));
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      dispatch(resetUser());
      navigate(`${PublicRoutes.LOGIN}`, { replace: true });
      // eslint-disable-next-line
    } catch (error: any) {
      console.log({ code: error.code });
      SnackbarUtilities.error(getValidationError(error.code));
    }
  };

  return {
    login,
    register,
    logout,
  };
}
