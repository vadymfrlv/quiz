import { keyframes } from 'styled-components';

export const pulse1 = keyframes`
  0% {
    opacity: 0.9;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.5;
  }
`;

export const pulse2 = keyframes`
  0% {
    opacity: 0.75;
  }
  15% {
    opacity: 0.7;
  }
  25% {
    opacity: 0.65;
  }
  50% {
    opacity: 0.45;
  }
  75% {
    opacity: 0.35;
  }
  100% {
    opacity: 0.25;
  }
`;
