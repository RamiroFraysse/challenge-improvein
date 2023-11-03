import styled from "styled-components";

export const HomeHeaderStyled = styled.div`
  margin-top:7rem;

  display:flex;
  justify-content:space-around;
  
`

export const HomeTitle = styled.h1`
  font-size:2rem;
  text-align:center;
  margin:auto;
  width:100%;
  color:#6EE7B7;
`
export const SubTitle = styled.h2`
  font-size:1rem;
  text-align:center;
  margin:auto;
  width:100%;
  color:#fff;
`

export const Layout = styled.div`
  padding: 30px;
`
export const Container = styled.div`
  display: block;
`;
export const ContainerList = styled.ul`
  display:grid;
  grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
  gap:.5rem;
  text-align:center;
  justify-items:center;
`

export const ButtonSort = styled.button`
  background-color: #6EE7B7; 
  border: none;
  color: #000;
  font-weight: bold;
`;

export const InputFilter = styled.input`
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
