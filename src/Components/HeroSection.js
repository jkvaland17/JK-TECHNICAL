import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const HeroSection = ({name,image}) => {
  return (
    <Wrapepr>
      <div className="container grid grid-two-column">
        <div className="section-data">
          <p className="top-data">HELLO !</p>
          <h1 className="heading">{name}</h1>
          <p className="para">
            I'm Jaydip Valand. A React Developer and freelancer.
          </p>
          <Button className="hire btn">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>
        <div className="section-image">
          <picture>
            <img src={image} alt="homepage" className="imgsize"></img>
          </picture>
        </div>
      </div>
    </Wrapepr>
  );
};

const Wrapepr = styled.section`
  .section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .imgsize {
    width: 100%;
  }
  .btn {
    max-width: 16rem;
  }

  .top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
export default HeroSection;
