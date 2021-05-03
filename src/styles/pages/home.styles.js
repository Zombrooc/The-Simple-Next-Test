import styled, { keyframes } from "styled-components";

import BG from "../../assets/images/stacked-waves-haikei.svg";

export const Container = styled.div``;

export const CardContainer = styled.div`
  width: 100%;
  background: var(--color-light);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  .container {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .container .card {
    position: relative;
    cursor: pointer;
  }

  .container .card .face {
    width: 300px;
    height: 200px;
    transition: 0.5s;
  }

  .container .card .face.face1 {
    position: relative;
    background: var(--color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
    border: 1px solid #ddd;
  }

  .container .card:hover .face.face1 {
    background: var(--color-danger);
    transform: translateY(0);
  }

  .container .card .face.face1 .content {
    opacity: 0.2;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
  }

  .container .card:hover .face.face1 .content {
    opacity: 1;
  }

  .container .card .face.face1 .content img {
    max-width: 100px;
  }

  .container .card .face.face1 .content h3 {
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
  }

  .container .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    transform: translateY(-100px);
    border: 1px solid #ddd;
  }

  .container .card:hover .face.face2 {
    transform: translateY(0);
  }

  .container .card .face.face2 .content p {
    margin: 0;
    padding: 0;
  }

  .container .card .face.face2 .content a {
    margin: 15px 0 0;
    display: inline-block;
    text-decoration: none;
    font-weight: 900;
    color: var(--color-dark);
    padding: 5px;
    border: 1px solid var(--color-dark);
  }

  .container .card .face.face2 .content a:hover {
    background: var(--color-dark);
    color: #fff;
  }
`;

export const Landing = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2.54rem;

  canvas {
    display: block;
  }

  #tsparticles {
    width: 100%;
    height: 100%;
    padding: 0 80px;
    z-index: -4444;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    /* background-attachment: fixed; */
    background-image: url(${BG});
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  /* position: relative; */
  padding: 20px;
  position: absolute;
  top: 0;

  color: var(--color-light);

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .callToAction {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px;
    font-size: 1.5rem;

    a {
      border: none;
      border: 2px solid var(--color-danger);
      color: var(--color-light);
      background: var(--color-danger);
      padding: 15px 25px;
      margin-top: 100px;
      border-radius: 10000px;
      cursor: pointer;
      transition: color 0.5s, background 0.5s;

      &:hover {
        color: var(--color-danger);
        background: transparent;
      }

      @media screen and (max-width: 550px) {
        color: var(--color-light);
      }
    }
  }

  div.dev {
    font-size: 5rem;
    margin-bottom: 25px;
  }

  hr {
    width: 65%;
  }

  h2.brand {
    font-size: 2rem;
    margin-top: 15px;
  }

  @media screen and (max-width: 550px) {
    p.brand {
      font-size: 1.5rem;
    }
  }
`;

const glitchEffect = keyframes`
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const glitchEffect2 = keyframes`
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(-2px, -3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(-5px, -2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(-5px, -1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(-2px, -6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
`;

const glitchEffect3 = keyframes`
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(2px, 3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(5px, 2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(5px, 1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(2px, 6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
`;

export const Title = styled.div`
  font-style: italic;
  font-size: 4rem;
  font-family: "Pacifico";
  font-weight: 100;
  margin-bottom: 25px;
  padding-bottom: 25px;

  a {
    color: var(--color-light);
  }

  p {
    margin: 0 !important;
    line-height: 0 !important;

    span {
      font-family: "JetBrains Mono" !important;
    }

    &.glitch {
      animation: 2.5s ${glitchEffect} infinite;

      &:nth-child(2) {
        color: #67f3da;
        animation: 2.5s ${glitchEffect2} infinite;
      }

      &:nth-child(3) {
        color: #f16f6f;
        animation: 2.5s ${glitchEffect3} infinite;
      }
    }
  }

  @media screen and (max-width: 590px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 460px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;
