/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUser } from "@/redux/slices/userSlice";
import { registerUser } from "@/services/authService";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { SnackbarUtilities, getValidationError } from "@/utilities";
import { LinkStyled, SpanStyled } from "@/styled-components";
import AuthComponent from "../components/AuthComponent";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async ({ email, password }: any) => {
    try {
      const result = await registerUser(email, password);
      dispatch(
        createUser({
          email: result.user.email,
          id: result.user.uid,
          name: result.user.displayName,
        })
      );
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
      console.log({ result });
    } catch (error: any) {
      console.log({ code: error.code });
      SnackbarUtilities.error(getValidationError(error.code));
    }
  };

  return (
    <>
      <AuthComponent
        formTitle="Register"
        onSubmit={register}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email format")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password must contain at least 6 characters")
            .required("Required"),
        })}
        initialValues={{ email: "", password: "" }}
        fields={[
          {
            label: "Email",
            name: "email",
            placeholder: "Email",
            autoComplete: "off",
            type: "email",
            id: "email",
          },
          {
            label: "Password",
            name: "password",
            placeholder: "Password",
            autoComplete: "off",
            type: "password",
            id: "password",
          },
        ]}
      />
      <SpanStyled>
        Do you have an account already? Please{" "}
        <LinkStyled to={`/${PublicRoutes.LOGIN}`} replace={true}>
          login
        </LinkStyled>{" "}
        to get started.
      </SpanStyled>
    </>
  );
}
export default RegisterPage;
