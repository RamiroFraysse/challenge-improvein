import { PublicRoutes } from "@/routes";
import * as Yup from "yup";
import { SpanStyled, LinkStyled } from "@/styled-components";
import AuthComponent from "../components/AuthComponent";
import { useAuth } from "@/hooks";

function LoginPage() {
  const { login } = useAuth();

  return (
    <>
      <AuthComponent
        formTitle="Login"
        onSubmit={login}
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
        If you don't have an account, please{" "}
        <LinkStyled to={`/${PublicRoutes.REGISTER}`} replace={true}>
          register
        </LinkStyled>{" "}
        to get started.
      </SpanStyled>
    </>
  );
}
export default LoginPage;
