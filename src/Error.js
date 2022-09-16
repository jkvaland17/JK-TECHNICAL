import React from 'react'
import styled from 'styled-components'
import { Button } from "./Components/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <ErrorPage>
      <img src="./images/error.jpg" alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </ErrorPage>
  );
}

const ErrorPage = styled.section`
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-transform: capitalize;
  }

  img {
    max-width: 40%;
  }
`;
export default Error
