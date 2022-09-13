import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <MainHeader>
        <NavLink to="/">
          <img src="../public/images/logo.png" alt="logo" className="logo"></img>
        </NavLink>
        <Nav />
      </MainHeader>
    </div>
  );
};

const MainHeader = styled.header`
  padding: 0 76.8px;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

.logo{
    height: 48px;
    max-width:30%;

}
`;
export default Header;
