import styled, { keyframes } from "styled-components";

export const fadeAndSlideIn = keyframes`
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeAndSlideDown = keyframes`
  100% {
    transform: translateY(10px);
    opacity: 1;
  }
  0% {
    transform: translateY(0);
    opacity: 0;
  }
`;

export const generateAnimationDelayCSS = (
  startIndex,
  delayIncrease,
  elements
) => {
  let css = "";
  let delay;
  for (let i = 1; i <= elements; i++) {
    delay = i % 3 === 0 ? i * delayIncrease : delay;
    css += `
      &:nth-of-type(${startIndex}n + ${i}) {
        animation-delay: ${delay}s;
      }
    `;
  }

  return css;
};

export const StyledHoverableImage = styled.div`
  animation: 0.2s ease-out 0s 1 normal backwards running ${fadeAndSlideIn};
  ${generateAnimationDelayCSS(3, 0.02, 100)}

  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 140%;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  .image-card {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const StyledHoverableImgMainHome = styled.div`
  animation: 0.2s ease-out 0s 1 normal backwards running ${fadeAndSlideIn};
  ${generateAnimationDelayCSS(3, 0.02, 100)}

  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  .image-card {
    border-radius: 8px;
    max-width: none;
    object-fit: cover;
    cursor: pointer;
  }
`;
