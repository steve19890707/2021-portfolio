import styled, { css } from "styled-components";
import { styles } from "../../../constants/styles";
// common
import { common, renderStyleColor, renderFontColor } from "./StyledCommon";
// animations
import { flashing } from "../Animations";
// fetch functions
import { fetchRwdProps } from "../../../constants/fetchFuntions";

const closeDiv = (i, closeColor = "") => {
  switch (i) {
    case 1:
    case 5:
    case 12:
    case 13:
    case 14:
    case 19:
    case 20:
    case 21:
    case 22:
    case 25:
    case 27:
    case 28:
    case 36:
    case 40:
      return `background-color:${closeColor}`;
    default:
      return;
  }
};
const mainPictureFor = ({ closeColor }) => {
  let styles = "";
  for (let i = 1; i <= 40; i += 1) {
    if (i <= 5) {
      styles += `
        &-${i} {
          left: ${15 + 7 * (i - 1)}%;
          top: 15%;
          ${closeDiv(i, closeColor)}
        }
      `;
    }
    if (i > 5 && i <= 10) {
      styles += `
        &-${i} {
          left: ${15 + 7 * (i - 6)}%;
          top: 16.5%;
          ${closeDiv(i, closeColor)}
        }
      `;
    }
    if (i > 10 && i <= 15) {
      styles += `
        &-${i} {
          left: ${15 + 7 * (i - 11)}%;
          top: 18%;
          ${closeDiv(i, closeColor)}
        }
      `;
    }
    if (i > 15 && i <= 20) {
      styles += `
        &-${i} {
          left: ${15 + 7 * (i - 16)}%;
          top: 19.5%;
          ${closeDiv(i, closeColor)}
        }
      `;
    }
    if (i > 20 && i <= 25) {
      styles += `
        &-${i} {
          left: ${15 + 7 * (i - 21)}%;
          top: 21%;
          ${closeDiv(i, closeColor)}
        }
      `;
    }
    if (i > 25 && i <= 30) {
      styles += `
        &-${i} {
          left: ${15 + 7 * (i - 26)}%;
          top: 22.5%;
          ${closeDiv(i, closeColor)}
        }
      `;
    }
    if (i > 30 && i <= 35) {
      styles += `
        &-${i} {
          left: ${15 + 7 * (i - 31)}%;
          top: 24%;
          ${closeDiv(i, closeColor)}
        }
      `;
    }
    if (i > 35 && i <= 40) {
      styles += `
        &-${i} {
          left: ${15 + 7 * (i - 36)}%;
          top: 25.5%;
          ${closeDiv(i, closeColor)}
        }
      `;
    }
  }
  return css`
    ${styles}
  `;
};
export const StyledBuildType6 = styled.div`
  ${({ position }) => common(position)};
  width: 20%;
  height: 60%;
  transform: translateX(-50%);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: `light2Front` })}
    z-index: 3;
  }
  .floor-top {
    position: relative;
    width: 100%;
    height: 65%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor1" })}
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateY(100%);
      border-top: ${({ currentStyles }) => `15px solid
        ${styles.getIn(["background", currentStyles, "buildColor1"])}`};
      border-bottom: 15px solid transparent;
      border-right: 15px solid transparent;
      border-left: ${({ currentStyles }) => `15px solid
        ${styles.getIn(["background", currentStyles, "buildColor1"])}`};
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(100%);
      border-top: ${({ currentStyles }) => `15px solid
        ${styles.getIn(["background", currentStyles, "sideShadow1"])}`};
      border-bottom: 15px solid transparent;
      border-left: 15px solid transparent;
      border-right: ${({ currentStyles }) => `15px solid
        ${styles.getIn(["background", currentStyles, "sideShadow1"])}`};
    }
  }
  .insdie-decorate {
    position: absolute;
    width: 3%;
    z-index: 2;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "sideShadow1" })}
    &.type1 {
      top: 10%;
      right: 10%;
      height: 32%;
    }
    &.type2 {
      top: 10%;
      right: 17%;
      height: 28%;
    }
    &.type3 {
      top: 10%;
      right: 24%;
      height: 28%;
    }
    &.type4 {
      top: 10%;
      right: 31%;
      height: 25%;
    }
  }
  .floor-bottom {
    position: relative;
    width: 80%;
    height: 35%;
    margin: 0 auto;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor1" })}
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 100%;
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "sideShadow1" })}
    }
  }
  .sing {
    position: absolute;
    top: 22%;
    left: 0;
    transform: translateX(-100%);
    width: 40%;
    height: 35%;
    .sing-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text-area {
      position: relative;
      width: 80%;
      height: 100%;
      padding: 6% 0;
      box-sizing: border-box;
      font-family: jackeyfont;
      ${flashing}
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "buildColor1" })}
      .inside {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 95%;
        border: ${({ currentStyles }) => `3px solid
        ${styles.getIn(["background", currentStyles, "light2Front"])}`};
        transform: translate(-50%, -50%);
        animation: "flashing" 1s infinite;
      }
      .sing-text {
        width: 100%;
        height: 22%;
        text-align: center;
        transform: translate(5%, 20%);
        font-size: ${({ rwd }) =>
          fetchRwdProps({
            state: rwd,
            desktop: `50px`,
            pad: `30px`,
            mobile: `30px`,
          })};
        ${({ currentStyles }) =>
          renderFontColor({ currentStyles, color: "highLight" })}
        user-select: none;
      }
    }
    .support-area {
      position: relative;
      width: 20%;
      height: 100%;
      .support {
        ${flashing}
        position: absolute;
        right: 0;
        width: 100%;
        height: 2%;
        transform: rotate(45deg);
        transform-origin: center;
        animation: "flashing" 1s infinite;
        ${({ currentStyles }) =>
          renderStyleColor({ currentStyles, color: "light2Front" })}
        &.part1 {
          top: 10%;
        }
        &.part2 {
          top: 20%;
        }
        &.part3 {
          top: 30%;
        }
        &.part4 {
          top: 40%;
        }
        &.part5 {
          top: 50%;
        }
        &.part6 {
          top: 60%;
        }
        &.part7 {
          top: 70%;
        }
        &.part8 {
          top: 80%;
        }
        &.part9 {
          top: 90%;
        }
      }
    }
  }
  .main-picture {
    position: absolute;
    width: 5%;
    padding-bottom: 2%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "coverLight" })}
    z-index: 2;
    ${({ currentStyles }) =>
      mainPictureFor({
        closeColor: styles.getIn(["background", currentStyles, "light2Front"]),
      })}
  }
`;
