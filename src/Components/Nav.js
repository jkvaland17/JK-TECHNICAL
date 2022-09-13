import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    const NavBar = styled.nav`
      .navbarlist {
        display: flex;
        gap: 76.8px;

        li {
          list-style: none;
        }
      }
    `;
  return (
    <NavBar>
      <div className="menuIcon">
        <ul className="navbarlist">
          <li>
            <NavLink to="/" className="navbatlink">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbatlink">About</NavLink>
          </li>
          <li>
            <NavLink to="/service" className="navbatlink">Service</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbatlink">Contact</NavLink>
          </li>
        </ul>
      </div>
    </NavBar>
  );
};



export default Nav;
