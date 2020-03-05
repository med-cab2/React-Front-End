import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../logo/icon.png";

//styles
const NavCont = styled.div`
  background-color: #184725;
  height: 200px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border: solid 2px #8c6815;
`;

const Navbar = styled.nav`
  background-color: #184725;
  height: 200px;
  width: 795px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

const Nav = () => {
  return (
    <NavCont>
      <a target="_blank" href="https://icons8.com/icons/set/marijuana-leaf">
        <img src={icon} />
      </a>
      <h1 style={{ color: "#8c6815" }}>Strainiac</h1>
      <Navbar>
        <Link to="/login">Home</Link>
        <br />
        <Link>About Us</Link>
        <br />
        <Link to="/protected">Dashboard</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
      </Navbar>
    </NavCont>
  );
};

export default Nav;
