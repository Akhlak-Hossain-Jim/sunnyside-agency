import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div className="brand-logo">sunnyside</div>
      <div className="links">
        <a href="a">About</a>
        <a href="b">Service</a>
        <a href="c">Projects</a>
      </div>
      <div className="links to">
        <a href="f">
          <img src="/images/icon-facebook.svg" alt="facebook Icon" />
        </a>
        <a href="i">
          <img src="/images/icon-instagram.svg" alt="Instagram Icon" />
        </a>
        <a href="t">
          <img src="/images/icon-twitter.svg" alt="twitter Icon" />
        </a>
        <a href="p">
          <img src="/images/icon-pinterest.svg" alt="Pinterest Icon" />
        </a>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  padding: 50px 20px 60px;
  background-color: #90d4c5;
  color: hsl(167, 40%, 30%);
  text-align: center;
  .brand-logo {
    font-weight: 900;
    text-align: center;
    font-size: 32px;
  }
  .links {
    display: flex;
    gap: 30px;
    padding: 50px 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    a {
      color: hsl(167, 40%, 30%);
      font-weight: 600;
      text-decoration: none;
    }
    &.to {
      padding: 40px 20px 0;
      font-size: 20px;
      gap: 20px;
      font-weight: 900;
    }
  }
`;

export default Footer;
