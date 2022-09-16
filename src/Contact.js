import React from 'react'
import styled from 'styled-components'


const Contact = () => {
  
  return (
    <ContactPage>
      <h2 className="common-heading">Contact us</h2>
      <iframe
        title="This is a unique title"
        src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29752.372694745496!2d72.81272564528214!3d21.23000115023301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04eeb5c1077c1%3A0xf3db03f8cc74c359!2sKatargam%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1663312815097!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xoqbellw"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Your name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              autoComplete="off"
              required
            />

            <textarea
              type=""
              name="message"
              placeholder="Tell us about your project"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </ContactPage>
  );
}
const ContactPage = styled.section`
  padding: 9rem 0 5rem 0;
  input,
  textarea {
    text-transform: inherit;
  }
  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          padding: 1.4rem 2.4rem;
          font-size: 14px;
          max-width: 200px;
          border-radius:5px;


          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact
