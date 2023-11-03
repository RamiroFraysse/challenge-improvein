import { Formik } from "formik";
import InputText from "./InputText";
import {
  Title,
  FormContainer,
  SubmitButton,
  StyledForm,
} from "../styled-components/Styles";
import { Field, Props } from "../models/interfaces";
import { IUserForm } from "@/models";

function Form({
  onSubmit,
  initialValues,
  validationSchema,
  fields,
  formTitle,
}: Props) {
  return (
    <FormContainer>
      {formTitle && <Title>{formTitle}</Title>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: IUserForm) => {
          onSubmit(values);
        }}
      >
        {() => {
          return (
            <StyledForm>
              {fields.map((field: Field) => (
                <InputText
                  key={`${field.id}-login-sb`}
                  id={field.id}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  type={field.type}
                />
              ))}
              {true && (
                <div className="relative">
                  <SubmitButton type="submit">Submit</SubmitButton>
                </div>
              )}
            </StyledForm>
          );
        }}
      </Formik>
    </FormContainer>
  );
}
export default Form;
