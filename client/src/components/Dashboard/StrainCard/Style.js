import styled from "styled-components";

export const Image = styled.img`
  width: 30%;
  margin: 20px;
  border-radius: 10px;
`;

export const StrainCard = styled.div`
  border: 2px solid #8c6815;
  background-color: #f7f5e8;
  width: 30%;
  height: 100%;
  margin: 20px auto;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

export const Paragraph = styled.p`
  margin: 0 10px;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  margin: 20px;
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
