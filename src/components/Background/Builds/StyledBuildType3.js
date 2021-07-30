import styled from "styled-components";
import { styles } from "../../../constants/styles";
// common
import { common, renderStyleColor } from "./StyledCommon";

export const StyledBuildType3 = styled.div`
  ${({ position }) => common(position)};
  width: 12%;
  height: 38%;
  ${({ currentStyles }) =>
    renderStyleColor({ currentStyles, color: "sideShadow1" })}
  .side-decorate {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-95%);
    width: calc(100% - 10px);
    height: 10px;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "light2Front" })}
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      border-bottom: ${({ currentStyles }) => `5px solid
        ${styles.getIn(["background", currentStyles, "light2Front"])}`};
      border-top: 5px solid transparent;
      border-right: 5px solid transparent;
      border-left: ${({ currentStyles }) => `5px solid
        ${styles.getIn(["background", currentStyles, "light2Front"])}`};
    }
  }
  .insdie-decorate {
    position: absolute;
    height: 2%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor3" })}
    &.type1 {
      top: 24%;
      right: 5%;
      width: 50%;
    }
    &.type2 {
      top: 28%;
      right: 5%;
      width: 55%;
    }
    &.type3 {
      top: 32%;
      right: 5%;
      width: 55%;
    }
    &.type4 {
      top: 36%;
      right: 5%;
      width: 50%;
    }
  }
`;
