import React from "react";
import { ErrorMessage, useField } from "formik";
import {
  ErrorMessageSpan,
  Input,
  InputContainer,
  Label,
} from "../styled-components/Styles";
import { TypeInputs } from "../models/interfaces";

interface Props {
  label: string;
  name: string;
  id: string;
  type?: TypeInputs;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  autoComplete?: "off" | "on";
}

function InputText({
  label,
  id,
  className = "",
  isDisabled = false,
  ...props
}: Props): React.ReactElement {
  const [field, meta] = useField(props);

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        disabled={isDisabled}
        type="text" // Cambia esto según el tipo
        {...field}
        {...props}
        className={className}
      />
      {meta.touched && meta.error && (
        <ErrorMessageSpan>
          <ErrorMessage name={props.name} />
        </ErrorMessageSpan>
      )}
    </InputContainer>
  );
}

export default InputText;
