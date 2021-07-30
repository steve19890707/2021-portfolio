import styled from "styled-components";
// common
import { common, renderStyleColor, renderFontColor } from "./StyledCommon";
// fetch functions
import { fetchRwdProps } from "../../../constants/fetchFuntions";

export const StyledBuildType4 = styled.div`
  ${({ position }) => common(position)};
  width: 14%;
  height: 65%;
  ${({ currentStyles }) =>
    renderStyleColor({ currentStyles, color: "buildColor3" })}
  .inside-decorate {
    position: absolute;
    bottom: 0;
    left: 45%;
    width: 5%;
    height: 70%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "sideShadow1" })}
  }
  .text {
    font-family: RingMatrix;
    position: absolute;
    font-size: ${({ rwd }) =>
      fetchRwdProps({
        state: rwd,
        desktop: `40px`,
        pad: `30px`,
        mobile: `30px`,
      })};
    ${({ currentStyles }) =>
      renderFontColor({ currentStyles, color: "light2Front" })}
    user-select: none;
    &-0 {
      right: 10%;
      top: 10%;
    }
    &-1 {
      right: 10%;
      top: 16%;
    }
    &-2 {
      right: 11.5%;
      top: 22%;
    }
    &-3 {
      right: 12%;
      top: 28%;
    }
    &-4 {
      right: 11.5%;
      top: 34%;
    }
  }
`;
