import { keyframes } from "styled-components";

export const WaveAnimation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  10% {
      transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
      transform: rotate(-8deg);
  }
  30% {
      transform: rotate(14deg);
  }
  40% {
      transform: rotate(-4deg);
  }
  50% {
      transform: rotate(10deg);
  }
  60% {
      transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
      transform: rotate(0deg);
  }
`;

export const ZoomInZoomOut = keyframes`
  0% {
      transform: scale(1, 1);
  }
  50% {
      transform: scale(1.1, 1.1);
  }
  100% {
      transform: scale(1, 1);
  }
`;

export const Opacity = keyframes`
    100% {
      opacity: 1;
      // transform: translateX(0%);
    }
  `;
