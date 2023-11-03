import {
  Background,
  Container,
  AuthWrapper,
} from "../styled-components/Styles";
import Form from "./Form";
import { Props } from "../models/interfaces";

export function AuthComponent(props: Props) {
  return (
    <AuthWrapper>
      <Container>
        <Background />
        <Form {...props} />
      </Container>
    </AuthWrapper>
  );
}
export default AuthComponent;
