import styled from "styled-components";
import { styles } from "../../../constants/styles";
// common
import { common, renderStyleColor } from "./StyledCommon";

export const StyledBuildType8 = styled.div`
  ${({ position }) => common(position)};
  width: 23%;
  height: 90%;
  .floor-top {
    position: relative;
    width: 40%;
    margin-left: 20px;
    height: 20%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor3" })}
  }
  .floor-middle {
    position: relative;
    width: 75%;
    height: 20%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor3" })}
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      border-bottom: ${({ currentStyles }) => `10px solid
        ${styles.getIn(["background", currentStyles, "buildColor3"])}`};
      border-top: 10px solid transparent;
      border-left: 10px solid transparent;
      border-right: ${({ currentStyles }) => `10px solid
        ${styles.getIn(["background", currentStyles, "buildColor3"])}`};
    }
  }
  .floor-bottom {
    position: relative;
    width: 100%;
    height: 60%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor3" })}
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 12%;
      transform: translateY(-100%);
      width: 3%;
      height: 25%;
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "buildColor3" })}
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 18%;
      transform: translateY(-100%);
      width: 3%;
      height: 20%;
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "buildColor3" })}
    }
  }
`;
