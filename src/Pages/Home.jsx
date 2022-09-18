import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <div className="container">
        <div className="r1-c1 bg">
          <img src="https://assets.codepen.io/11614/grid1-1-f.png" alt="a" />
        </div>
        <div className="r3-c1">
          <img src="https://assets.codepen.io/11614/grid3-1.jpg" alt="b" />
        </div>
        <div className="r3-c2">
          <img src="https://assets.codepen.io/11614/grid3-2.png" alt="c" />
        </div>
        <div className="r1-c3">
          <img src="https://assets.codepen.io/11614/grid1-3.jpg" alt="d" />
        </div>
        <div className="r1-c4">
          <img src="https://assets.codepen.io/11614/grid1-4.png" alt="4" />
        </div>
        <div className="r2-c3">
          <img src="https://assets.codepen.io/11614/grid2-3.jpg" alt="4" />
        </div>
        <div className="r2-c4">
          <img src="https://assets.codepen.io/11614/grid2-4.jpg" alt="4" />
        </div>
        <div className="r3-c4">
          <img src="https://assets.codepen.io/11614/grid3-4.png" alt="4" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`

  .container {
    margin: 10px auto;
    font-size: 0;
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 29px 29px;
    grid-auto-flow: row;
    grid-template-areas:
      "r1-c1 r1-c1 r1-c3 r1-c4"
      "r1-c1 r1-c1 r2-c3 r2-c4"
      "r3-c1 r3-c2 r2-c3 r3-c4";
  }

  .r1-c1 {
    grid-area: r1-c1;
  }

  .r3-c1 {
    grid-area: r3-c1;
  }

  .r3-c2 {
    grid-area: r3-c2;
    width: 100%;
  }

  .r1-c3 {
    grid-area: r1-c3;
  }

  .r1-c4 {
    grid-area: r1-c4;
  }

  .r2-c3 {
    grid-area: r2-c3;
  }

  .r2-c4 {
    grid-area: r2-c4;
  }

  .r3-c4 {
    grid-area: r3-c4;
  }
  img {
    width: 100%;
    height: auto;
  }
  .bg {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    display: flex;
  }
  .bg img {
    width: 50%;
    max-width: 300px;
    margin: auto;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      gap: 28px 28px;
      grid-template-areas:
        "r1-c1 r1-c1 r1-c3"
        "r1-c1 r1-c1 r2-c3"
        "r3-c1 r3-c2 r2-c3"
        "r1-c4 r2-c4 r3-c4";
    }
    .r1-c1 {
      min-width: 346px;
      min-height: 346px;
    }
  }

  @media all and (max-width: 763px) and (orientation: portrait) {
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 6vw 5vw;
      grid-template-areas:
        "r1-c1 r1-c1"
        "r3-c1 r3-c2"
        "r1-c4  r1-c3"
        "r2-c3 r3-c4"
        "r2-c3 r2-c4";
    }
    div {
      height: auto;
      height: 45vw;
      overflow: visible;
    }
    .bg {
      width: 98vw;
      height: 98vw;
    }
  }
`;
