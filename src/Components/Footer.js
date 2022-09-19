/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterPage>
      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>JK Technical</h3>
            <p>We always try to deliver more then expectation</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://github.com/jkvaland17"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <FaLinkedin className="icons" />
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/jaydip-valand-5b4377b7/"
                  target="_blank" rel="noreferrer"
                ></a>
                <FaGithub className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCWRxALboiJpwC8lqrNN6HAg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91-9876543210</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@ {new Date().getFullYear()} JKTechnical. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </FooterPage>
  );
}

const FooterPage = styled.section`
  input[type="submit"] {
    padding: 12px 35.2px;
    text-transform: capitalize;
    font-size: 14px;
    border-radius: 5px;
  }
  input,
  textarea {
    padding: 12px 38.4px;
    text-transform: capitalize;
  }
  
  footer {
    padding: 10rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size: 14px;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 5rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;
export default Footer
