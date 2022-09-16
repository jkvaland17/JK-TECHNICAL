import React from "react";
import styled from "styled-components";
import HeroSection from "./Components/HeroSection";
import Service from "./Service";
import { NavLink } from "react-router-dom";
import { Button } from "./Components/Button";

const Home = () => {
  const data = {
    name: "JK Technical",
    image: "./images/home.jpg",
  };
  return (
    <>
      <HeroSection {...data} />,
      <Service />
      <HomeCont>
        <div className="box">
          <h3>Let's create something amazing together!</h3>
          <div className="contact-short-btn">
            <NavLink to="/contact">
              <Button>contact us</Button>
            </NavLink>
          </div>
        </div>
      </HomeCont>
    </>
  );
};

const HomeCont = styled.section`
  .box {
    margin: auto;
    padding: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    text-align: center;
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
    border-radius: 5px;
    margin-top:3rem
  }
`;

export default Home;
