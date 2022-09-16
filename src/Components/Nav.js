import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {

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
            font-size:15px;
            ${'' /* text-transform: uppercase; */}
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
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
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
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
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

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;
    
  return (
    <MaiNav>
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
    </MaiNav>
  );
};





export default Nav;
