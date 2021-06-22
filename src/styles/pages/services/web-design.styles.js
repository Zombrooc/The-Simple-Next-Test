import styled from "styled-components";

import htmlScreen from "../../../assets/images/html_screen.png";

export const Container = styled.div`
  min-height: 100%;

  background-image: url(${htmlScreen});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(40, 42, 54, 0.5); */
  color: var(--color-light);

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2.text {
      font-size: 47px;
    }

    .text {
      font-size: 60px;
      font-weight: 600;
    }

    .wrapper {
      position: relative;

      .offset {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-50%);
      }

      .text {
        white-space: nowrap;
        color: var(--color-danger);

        transition-duration: 1s;
      }
    }
  }

  .animate-before {
    transform: translateY(40px);
    opacity: 0;
    pointer-events: none;
  }

  .animate-after {
    transform: translateY(-40px);
    opacity: 0;
    pointer-events: none;
  }
`;
