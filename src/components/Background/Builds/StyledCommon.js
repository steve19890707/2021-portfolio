import styled from "styled-components";
import { styles } from "../../../constants/styles";
// animations
import { flashing } from "../Animations";

export const common = (position) => `
  position: absolute;
  bottom:0;
  ${position};
  .content {
    position: relative;
    width: 100%;
    height: 100%;
  }
;`;
export const renderStyleColor = ({ currentStyles = "", color = "" }) =>
  `background-color: ${styles.getIn(["background", currentStyles, color])};`;
export const renderFontColor = ({ currentStyles = "", color = "" }) =>
  `color: ${styles.getIn(["background", currentStyles, color])};`;

export const StraightLight = styled.div`
  /* animations */
  ${flashing}
  position: absolute;
  width: ${({ width }) => width};
  height: ${({ hight }) => hight};
  z-index: 2;
  ${({ position }) => position};
  ${({ currentStyles, colorName }) =>
    renderStyleColor({ currentStyles, color: `${colorName}Back` })};
  &::before {
    display: ${({ nodisplay }) => (nodisplay ? `none` : `block`)};
    content: "";
    position: absolute;
    width: 95%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${({ currentStyles, colorName }) =>
      renderStyleColor({ currentStyles, color: `${colorName}Front` })};
    animation: ${({ delay }) => `flashing 2s ${delay}s linear infinite`};
  }
`;
export const SquareLight = styled.div`
  /* animations */
  ${flashing}
  position: absolute;
  width: 10px;
  padding-bottom: 10px;
  z-index: 2;
  ${({ position }) => position};
  ${({ currentStyles, colorName, singleColor }) =>
    renderStyleColor({
      currentStyles,
      color: `${singleColor ? colorName : `${colorName}Back`}`,
    })};
  &::before {
    display: ${({ singleColor }) => (singleColor ? `none` : `block`)};
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${({ currentStyles, colorName }) =>
      renderStyleColor({ currentStyles, color: `${colorName}Front` })};
    animation: ${({ delay }) => `flashing 2s ${delay}s linear infinite`};
  }
`;
