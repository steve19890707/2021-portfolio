import styled from "styled-components";
// common
import { common, renderStyleColor, renderFontColor } from "./StyledCommon";
// animations
import { flashing } from "../Animations";
// fetch functions
import { fetchRwdProps } from "../../../constants/fetchFuntions";

export const StyledBuildType2 = styled.div`
  ${({ position }) => common(position)};
  width: 18%;
  height: 75%;
  .floor-top {
    width: 60%;
    margin: 0 auto;
    height: 30%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor3" })}
  }
  .floor-middle {
    width: 80%;
    margin: 0 auto;
    height: 40%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor3" })}
  }
  .floor-bottom {
    width: 100%;
    margin: 0 auto;
    height: 30%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "buildColor3" })}
  }
  .sing {
    position: absolute;
    width: 42%;
    left: 50%;
    top: 13%;
    transform: translateX(-50%);
    border-radius: 50%;
    font-family: jackeyfont;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "singLight3" })}
    .sing-content {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
      border-radius: 50%;
    }
    .cover {
      ${flashing}
      position: absolute;
      top: 50%;
      left: 50%;
      width: 85%;
      height: 85%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: 1;
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "singLight2" })}
      animation: "flashing" 1.5s infinite;
    }
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-38%, -46%);
      z-index: 2;
      font-size: ${({ rwd }) =>
        fetchRwdProps({
          state: rwd,
          desktop: `65px`,
          pad: `30px`,
          mobile: `30px`,
        })};
      ${({ currentStyles }) =>
        renderFontColor({ currentStyles, color: "singLight3" })}
      user-select: none;
    }
  }
`;
