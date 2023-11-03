import { IUserForm } from "@/models";
import * as Yup from "yup";


export interface Field {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  autoComplete: "on" | "off";
  type:TypeInputs;
}

export interface Props {
  onSubmit: (values: IUserForm) => void;
  initialValues: IUserForm;
  // eslint-disable-next-line
  validationSchema: Yup.ObjectSchema<any>;
  fields: Field[];
  formTitle?:string;
}


export type TypeValues = string | number | Date | boolean;

export type TypeInputs = "text" | "email" | "password" | "number";