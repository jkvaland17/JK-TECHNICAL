import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <MainHeader>
        <NavLink to="/">
          {/* <img src="./images/logo.png" alt="logo" className="logo"></img> */}
          <span>JK Technical</span>
        </NavLink>
        <Nav />
      </MainHeader>
    </div>
  );
};

const MainHeader = styled.header`
  padding: 5px 76.8px;
  background-color: #0a1435;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
  .logo {
    height: 40px;
    max-width: 100%;
  }
`;
export default Header;
