import styled from "styled-components";
// common
import { common, renderStyleColor, renderFontColor } from "./StyledCommon";
// fetch functions
import { fetchRwdProps } from "../../../constants/fetchFuntions";

export const StyledBuildType5 = styled.div`
  ${({ position }) => common(position)};
  width: 14%;
  height: 33%;
  ${({ currentStyles }) =>
    renderStyleColor({ currentStyles, color: "buildColor1" })}
  .insdie-decorate {
    position: absolute;
    height: 2%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "sideShadow1" })}
    &.type1 {
      top: 30%;
      right: 5%;
      width: 55%;
    }
    &.type2 {
      top: 34%;
      right: 5%;
      width: 55%;
    }
    &.type3 {
      top: 38%;
      right: 5%;
      width: 50%;
    }
    &.type4 {
      top: 42%;
      right: 5%;
      width: 50%;
    }
  }
  .straight-decorate {
    position: absolute;
    top: 0;
    right: 5%;
    width: 7%;
    height: 12%;
    transform: translateY(-100%);
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor1" })}
    &.part-2 {
      right: 15%;
      width: 4%;
      height: 18%;
    }
  }
  .text {
    font-family: RingMatrix;
    position: absolute;
    font-size: ${({ rwd }) =>
      fetchRwdProps({
        state: rwd,
        desktop: `50px`,
        pad: `30px`,
        mobile: `30px`,
      })};
    ${({ currentStyles }) =>
      renderFontColor({ currentStyles, color: "singLight2" })}
    user-select: none;
    &-0 {
      left: 37%;
      top: 16%;
    }
    &-1 {
      left: 49%;
      top: 16%;
    }
    &-2 {
      left: 61%;
      top: 16%;
    }
    &-3 {
      left: 73%;
      top: 16%;
    }
  }
`;
