import styled from "styled-components";
import { Form } from "formik";

export const AuthWrapper = styled.div`
   font-family: "system-ui";
  /* m-auto */
  margin-left: auto;
  margin-right: auto;

  /* flex */
  display: flex;

  /* flex-col */
  flex-direction: column;

  /* justify-center */
  justify-content: center;

  /* sm:py-12 */
  @media (min-width: 640px) {
    padding-top: 3rem; /* 12 * 0.25rem */
    padding-bottom: 3rem; /* 12 * 0.25rem */
  }
`;

export const Container = styled.div`
  /* relative */
  position: relative;

  /* py-3 */
  padding-top: 0.75rem; /* 3 * 0.25rem */

  /* sm:max-w-xl sm:mx-auto */
  @media (min-width: 640px) {
    max-width: 36rem; /* El ancho máximo específico puede variar según tu diseño. */
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Background = styled.div`
  /* absolute */
  position: absolute;

  inset:0;

  /* bg-gradient-to-r from-teal-300 to-blue-500 */
  background: linear-gradient(to right, #6EE7B7, #1d4e89);
  /* Los colores (#6EE7B7 y #2563E9) pueden variar dependiendo de tu paleta de colores. */

  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl */
  @media (min-width: 640px) {
    transform: rotate(-6deg);
    /* z-index:2; */
    border-radius: 1.5rem; /* 3 * 0.5rem */
  }
`;

export const Wrapper = styled.div`
  background: linear-gradient(to right, #4fd1c5, #1d4e89);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transform: skewY(-6deg);
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
`;


export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;



export const FormContainer = styled.div`
  /* relative */
  position: relative;
  min-width: min(375px,100vw);

  /* bg-blue-600 */
  background-color:#1d4e89; /* El color específico dependerá de tu paleta de colores. */

  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* sm:rounded-3xl */
  @media (min-width: 640px) {
    border-radius: 1.5rem; /* 3 * 0.5rem */
  }

  /* sm:p-20 */
  @media (min-width: 640px) {
    padding: 5rem; /* 20 * 0.25rem */
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
`;

export const SubmitButton = styled.button`
  
  width: 100%;
  display: inline-block;
  padding: 0.5rem 1rem; /* Ajusta los valores de padding según tus necesidades */
  background-color: #6EE7B7; /* Color de fondo específico */
  color: #fff; /* Color de texto específico */
  border-radius: 15px; /* Ajusta el radio del borde según tus necesidades */
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 1rem; /* Tamaño de fuente específico */
  line-height: 1.5;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid #007bff;
    opacity: 0.8;
  }
`;

export const InputContainer = styled.div`
  width:100%; 
  text-align:left;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 1rem;
  text-align:left;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  text-align:left;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border 0.2s;
  color: #fff;
  background: transparent;
  placeholder-opacity: 0.25;

  &:focus {
    border: 2px solid #6EE7B7;
  }
`;

export const ErrorMessageSpan = styled.span`
  color: #e00080;
  font-weight: bold;
  font-size: 0.875rem;
`;