import styled from "styled-components";
import { styles } from "../../../constants/styles";
// common
import { common, renderStyleColor } from "./StyledCommon";

export const StyledBuildType1 = styled.div`
  ${({ position }) => common(position)};
  width: 12%;
  height: 45%;
  ${({ currentStyles }) =>
    renderStyleColor({ currentStyles, color: "buildColor1" })}
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 2px;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: `light2Front` })}
    z-index: 3;
  }
  &::after {
    content: "";
    position: absolute;
    top: 4px;
    width: 100%;
    height: 2px;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: `light2Front` })}
    z-index: 3;
  }
  .side-decorate {
    position: absolute;
    width: 15%;
    height: 40%;
    bottom: 0;
    left: 0;
    transform: translateX(-98%);
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor1" })}
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      border-bottom: ${({ currentStyles }) => `15px solid
        ${styles.getIn(["background", currentStyles, "buildColor1"])}`};
      border-top: 15px solid transparent;
      border-left: 15px solid transparent;
      border-right: ${({ currentStyles }) => `15px solid
        ${styles.getIn(["background", currentStyles, "buildColor1"])}`};
    }
  }
  .side-shadow {
    position: absolute;
    width: 25%;
    height: 100%;
    right: 0;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "sideShadow1" })}
  }
`;
