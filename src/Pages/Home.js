import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <div className="contain">
        <div className="right m">
          <img src="/images/desktop/image-transform.jpg" alt="" />
        </div>
        <div className="left">
          <h1>Transform your brand</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo error
            quibusdam nobis dicta rem similique dolores repellendus, corrupti
            voluptatibus deserunt.
          </p>
          <a className="yeollow" href="a">
            learn more
          </a>
        </div>
        <div className="right w">
          <img src="/images/desktop/image-transform.jpg" alt="" />
        </div>
      </div>
      <div className="contain">
        <div className="right">
          <img src="/images/desktop/image-stand-out.jpg" alt="" />
        </div>
        <div className="left to">
          <h1>Transform your brand</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo error
            quibusdam nobis dicta rem similique dolores repellendus, corrupti
            voluptatibus deserunt.
          </p>
          <a className="redish" href="a">
            learn more
          </a>
        </div>
      </div>
      <div className="contain">
        <div className="lefti">
          <img src="/images/desktop/image-graphic-design.jpg" alt="" />
          <div className="text" style={{ color: "hsl(167, 40%, 24%)" }}>
            <h2>Graphic Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              mollitia tempora, quo harum aperiam similique!
            </p>
          </div>
        </div>
        <div className="righti">
          <img src="/images/desktop/image-photography.jpg" alt="" />
          <div className="text" style={{ color: " hsl(198, 62%, 26%)" }}>
            <h2>Photograph</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              animi ipsa numquam voluptatem accusantium adipisci!
            </p>
          </div>
        </div>
      </div>
      <div className="three-col">
        <h1>Client Testimonials</h1>
        <div className="testimonials">
          <div>
            <img src="/images/image-emily.jpg" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga non
              laudantium accusantium, voluptates adipisci dolorem!
            </p>
            <h2>Emily R.</h2>
            <em>Marketing Director</em>
          </div>
          <div>
            <img src="/images/image-thomas.jpg" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga non
              laudantium accusantium, voluptates adipisci dolorem!
            </p>
            <h2>Thomas S.</h2>
            <em>Chif Operating Director</em>
          </div>
          <div>
            <img src="/images/image-jennie.jpg" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga non
              laudantium accusantium, voluptates adipisci dolorem!
            </p>
            <h2>Jennie F.</h2>
            <em>Business Owner</em>
          </div>
        </div>
      </div>
      <div className="four-col">
        <img src="/images/desktop/image-gallery-milkbottles.jpg" alt="" />
        <img src="/images/desktop/image-gallery-orange.jpg" alt="" />
        <img src="/images/desktop/image-gallery-cone.jpg" alt="" />
        <img src="/images/desktop/image-gallery-sugarcubes.jpg" alt="" />
      </div>
    </Container>
  );
}

const Container = styled.main`
  .contain {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    margin: 0;
    margin-top: -6px;
    overflow: hidden;
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
    }
  }
  .left {
    padding: 150px 100px 100px 150px;
    background-color: #fffbf8;
    @media (max-width: 768px) {
      padding: 50px;
      font-size: 80%;
      h1 {
        font-size: 25px;
      }
    }
    @media (max-width: 548px) {
      padding: 50px 20px;
      text-align: center;
      h1 {
        font-size: 18px;
      }
    }
    &.to {
      padding: 150px 150px 100px 100px;
      @media (max-width: 768px) {
        padding: 50px;
      }
      @media (max-width: 548px) {
        padding: 50px 20px;
      }
    }
    h1 {
      font-family: "Fraunces", serif;
      color: #2a323b;
      font-size: 40px;
    }
    p {
      color: #a29fab;
      font-family: "Barlow", sans-serif;
    }
    a {
      font-family: "Fraunces", serif;
      text-transform: uppercase;
      color: #2a323b;
      transition: all 0.7s;
      position: relative;
      text-decoration: none;
      background-color: transparent;
      z-index: 2;
      &::after {
        content: "";
        height: 6px;
        width: 110%;
        position: absolute;
        bottom: 1px;
        left: -5px;
        right: -5px;
        border-radius: 5px;
        z-index: 1;
      }
      &.yeollow {
        &::after {
          background: rgba(255, 209, 1, 0.3);
        }
        &:hover {
          &::after {
            background: rgba(255, 209, 1, 0.6);
          }
        }
      }
      &.redish {
        &::after {
          background: rgba(255, 113, 99, 0.3);
        }
        &:hover {
          &::after {
            background: rgba(255, 113, 99, 0.6);
          }
        }
      }
    }
  }
  .right {
    &.m {
      @media (min-width: 549px) {
        display: none;
      }
    }
    &.w {
      @media (max-width: 548px) {
        display: none;
      }
    }
    object-fit: contain;
    object-position: center;
    img {
      width: 110%;
    }
  }
  .righti,
  .lefti {
    position: relative;
    aspect-ratio: 1/1;
    @media (max-width: 548px) {
      margin-top: -6px;
    }
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
      width: 100%;
      @media (max-width: 548px) {
        height: 80vh;
      }
    }
    .text {
      position: absolute;
      bottom: 40px;
      text-align: center;
      left: 0;
      display: grid;
      width: 100%;
      place-items: center;
      @media (max-width: 548px) {
        left: 0%;
      }
      h2 {
        font-family: "Fraunces", serif;
        font-size: 25px;
      }
      p {
        max-width: 300px;
        font-size: 15px;
        font-weight: 600;
        font-family: "Barlow", sans-serif;
        @media (max-width: 548px) {
          width: 250px;
        }
      }
    }
  }
  .three-col {
    padding: 150px 20px;
    background-color: #fffbf8;
    h1 {
      font-family: "Fraunces", serif;
      font-size: 20px;
      text-align: center;
      color: #a29fab;
      text-transform: uppercase;
      letter-spacing: 5px;
      @media (max-width: 548px) {
        font-size: 18px;
      }
    }
  }
  .testimonials {
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 30px;
    padding-top: 40px;

    & > div {
      max-width: 300px;
      min-width: 250px;
      font-size: 15px;
      font-weight: 600;
      font-family: "Barlow", sans-serif;
      p {
        color: hsl(232, 10%, 55%);
        margin: 60px auto;
        font-size: 17px;
      }
      h2 {
        font-family: "Fraunces", serif;
        font-weight: 900;
        color: hsl(212, 27%, 19%);
        font-size: 16px;
        margin-bottom: 10px;
      }
      em {
        color: hsl(232, 10%, 55%);
      }
      img {
        border-radius: 50%;
        height: 50px;
        width: 50px;
      }
    }
  }
  .four-col {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 548px) {
      grid-template-columns: 1fr 1fr;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default Home;
