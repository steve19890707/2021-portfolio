import styled from "styled-components";
import { styles } from "../../../constants/styles";
// common
import { common, renderStyleColor, renderFontColor } from "./StyledCommon";
// animations
import { opacityFont } from "../Animations";
// fetch functions
import { fetchRwdProps } from "../../../constants/fetchFuntions";

export const StyledBuildType7 = styled.div`
  ${({ position }) => common(position)};
  width: 22%;
  height: 78%;
  ${({ currentStyles }) =>
    renderStyleColor({ currentStyles, color: "buildColor3" })}
  .side-decorate {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-95%);
    width: calc(100% - 10px);
    height: 10px;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "light2Front" })}
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      border-bottom: ${({ currentStyles }) => `5px solid
        ${styles.getIn(["background", currentStyles, "light2Front"])}`};
      border-top: 5px solid transparent;
      border-left: 5px solid transparent;
      border-right: ${({ currentStyles }) => `5px solid
        ${styles.getIn(["background", currentStyles, "light2Front"])}`};
    }
  }
  .insdie-decorate-part {
    position: absolute;
    width: 25%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "sideShadow1" })}
    &.type1 {
      top: calc(2% + 10px);
      right: 8%;
      height: 35%;
    }
    &.type2 {
      top: calc(5% + 10px);
      right: 36%;
      height: 40%;
    }
    &.type3 {
      top: calc(2% + 10px);
      right: 64%;
      height: 35%;
    }
  }
  .top-part {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-95%);
    width: calc(100% - 10px);
    height: 10px;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "sideShadow1" })}
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      border-bottom: ${({ currentStyles }) => `5px solid
        ${styles.getIn(["background", currentStyles, "sideShadow1"])}`};
      border-top: 5px solid transparent;
      border-left: 5px solid transparent;
      border-right: ${({ currentStyles }) => `5px solid
        ${styles.getIn(["background", currentStyles, "sideShadow1"])}`};
    }
  }
  .other-light {
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 5%;
    height: 12%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "light1Front" })}
    &.up {
      bottom: 40%;
    }
  }
  .sing {
    ${opacityFont}
    position: absolute;
    top: -3%;
    left: 50%;
    width: 80%;
    height: 12%;
    transform: translate(-50%, -100%);
    font-family: RingMatrix;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "singBackground" })}
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 5%;
      transform: translateY(100%);
      width: 5%;
      height: 15%;
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "singBackground" })}
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 5%;
      transform: translateY(100%);
      width: 5%;
      height: 15%;
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "singBackground" })}
    }
    .triangle {
      position: absolute;
      border: 10px solid transparent;
      &.part1 {
        top: 0;
        left: 0;
        border-top-color: ${({ currentStyles }) =>
          `${styles.getIn(["background", currentStyles, "light2Front"])}`};
        border-left-color: ${({ currentStyles }) =>
          `${styles.getIn(["background", currentStyles, "light2Front"])}`};
      }
      &.part2 {
        top: 0;
        right: 0;
        border-top-color: ${({ currentStyles }) =>
          `${styles.getIn(["background", currentStyles, "light2Front"])}`};
        border-right-color: ${({ currentStyles }) =>
          `${styles.getIn(["background", currentStyles, "light2Front"])}`};
      }
      &.part3 {
        bottom: 0;
        left: 0;
        border-bottom-color: ${({ currentStyles }) =>
          `${styles.getIn(["background", currentStyles, "light2Front"])}`};
        border-left-color: ${({ currentStyles }) =>
          `${styles.getIn(["background", currentStyles, "light2Front"])}`};
      }
      &.part4 {
        bottom: 0;
        right: 0;
        border-bottom-color: ${({ currentStyles }) =>
          `${styles.getIn(["background", currentStyles, "light2Front"])}`};
        border-right-color: ${({ currentStyles }) =>
          `${styles.getIn(["background", currentStyles, "light2Front"])}`};
      }
    }
    .sing-title {
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${({ rwd }) =>
        fetchRwdProps({
          state: rwd,
          desktop: `40px`,
          pad: `30px`,
          mobile: `30px`,
        })};
      ${({ currentStyles }) =>
        renderFontColor({ currentStyles, color: "singLight1" })}
      user-select: none;
    }
  }
`;
export const StyledAnimeSpan = styled.span`
  animation: ${({ delay }) => `"opacityFont" 0.8s ${delay}s infinite;`};
`;
