import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #184725;
  height: 50px;
  width: 800px;
  margin: 0 auto;
  color: #8c6815;
  font-size: 25px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <small>Copyright Strainiac 2020</small>
    </FooterStyle>
  );
};

export default Footer;
