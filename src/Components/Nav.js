import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgPushChevronLeftO, CgPushChevronDownO } from "react-icons/cg";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <MaiNav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbarlist">
          <li>
            <NavLink
              to="/"
              className="navbatlink"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbatlink"
              onClick={() => setOpenMenu(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="navbatlink"
              onClick={() => setOpenMenu(false)}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbatlink"
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Nav icon */}
        <div className="mobile-navbar-btn">
          <CgPushChevronLeftO
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgPushChevronDownO
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </MaiNav>
  );
};

const MaiNav = styled.nav`
  .navbarlist {
    display: flex;
    gap: 76px;

    li {
      list-style: none;

      .navbatlink {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 15px;
          color: ${({ theme }) => theme.colors.white};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }

  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbatlink {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 15px;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.white};
      color: white;

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }

    /* hide the original nav menu  */
    .navbarlist {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;

      transform: translateX(100%);

      visibility: hidden;
      opacity: 0;

      li {
        .navbatlink {
          &:link,
          &:visited {
            font-size: 4.2rem;
            color:black;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .active .navbarlist {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }
`;

export default Nav;
