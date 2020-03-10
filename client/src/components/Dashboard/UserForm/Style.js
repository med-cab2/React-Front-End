import styled from "styled-components";
import { Field } from "formik";

export const H2 = styled.h2`
  margin-top: 20px;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column;
  background-color: #f7f5e8;
  height: 100%;
  padding-bottom: 25px;
  border: 2px solid #8c6815;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
  margin: 50px auto;
  border-radius: 10px;
`;

export const TextArea = styled(Field)`
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #8c6815;
`;

export const Button = styled.button`
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: lightslategray;
  width: 175px;
  height: 30px;

  &:hover {
    background-color: #8c6815;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
    font-weight: bold;
  }
`;

export const H1 = styled.h2`
  margin: 20px;
`;

export const Image = styled.img`
  margin-top: 20px;
  width: 10%;
`;
