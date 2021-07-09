import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  const [mnav, setmnav] = useState(false);
  return (
    <Container>
      <nav>
        <div className="brand-logo">sunnyside</div>
        <div className="ham" onClick={() => setmnav(!mnav)}>
          <img src="/images/icon-hamburger.svg" alt="" />
          {mnav ? (
            <>
              <div className="tringle"></div>
              <div className="pages-m">
                <Link to>About</Link>
                <Link to>Service</Link>
                <Link to>Projects</Link>
                <Link to>Contact</Link>
              </div>
            </>
          ) : null}
        </div>
        <div className="pages">
          <Link to>About</Link>
          <Link to>Service</Link>
          <Link to>Projects</Link>
          <Link to>Contact</Link>
        </div>
      </nav>
      <h1>We are Creatives</h1>
      <div className="arrow-container">
        <div className="arrow"></div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  background-image: url("/images/desktop/image-header.jpg");
  background-repeat: repeat;
  aspect-ratio: 16/9;
  @media (max-width: 548px) {
    aspect-ratio: 9/13;
    background-image: url("/images/mobile/image-header.jpg");
  }
  max-width: 1440px;
  margin: auto;
  background-position: center;
  background-size: cover;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 769px) {
      padding: 20px;
    }
    .brand-logo {
      font-weight: 900;
      color: #fff;
      font-size: 32px;
    }
    .ham {
      position: relative;
      z-index: 20;
      .pages-m {
        display: grid;
        position: absolute;
        top: 50px;
        right: 20px;
        border-radius: 10px;
        min-width: 250px;
        background-color: #fffbf8;
        transition: all 0.7s;
        animation: apper cubic-bezier(0.6, -0.28, 0.735, 0.045);
        a {
          color: #a29fab !important;
          text-align: center;
          /* max-width: 100%; */
          font-weight: 500;
          text-decoration: none;
          border-radius: 100px;
          padding: 20px;
          &:hover {
            background: #ffd101;
          }
        }
      }
      .tringle {
        position: absolute;
        top: 30px;
        right: 20px;
        border-bottom: 30px solid #fff;
        border-left: 30px solid transparent;
        transition: all 0.7s;
        animation: apper cubic-bezier(0.6, -0.28, 0.735, 0.045);
      }
      @keyframes apper {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @media (min-width: 769px) {
        display: none;
      }
    }
    .pages {
      display: flex;
      gap: 20px;
      @media (max-width: 768px) {
        display: none;
      }
      a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        text-align: center;
        width: 80px;
        border-radius: 100px;
        padding: 10px;
        .active {
          background-color: #fff;
        }
        &:hover {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(4px);
          text-transform: uppercase;
        }
      }
    }
  }
  h1 {
    font-family: "Fraunces", serif;
    text-align: center;
    margin-top: 70px;
    padding: 25px;
    letter-spacing: 8px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 50px;
    @media (max-width: 768px) {
      font-size: 35px;
      margin-top: 30px;
    }
  }
  .arrow-container {
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .arrow {
      border-radius: 6px;
      height: 110px;
      width: 5px;
      background-color: #fff;
      position: relative;
      &::after {
        position: absolute;
        bottom: -3px;
        left: 8px;
        content: "";
        height: 25px;
        width: 5px;
        transform: rotate(45deg);
        background-color: #fff;
        border-radius: 6px;
      }
      &::before {
        position: absolute;
        bottom: -3px;
        left: -8px;
        content: "";
        height: 25px;
        width: 5px;
        transform: rotate(-45deg);
        background-color: #fff;
        border-radius: 6px;
      }
    }
  }
`;

export default Header;
