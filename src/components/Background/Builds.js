import { useContext } from "react";
import { ReducerContext } from "../Props";
import styled from "styled-components";
import { styles } from "../../constants/styles";
// animations
import { flashing } from "./Animations";
// light lists
import { BuildType1List } from "./LightList";
const common = (position) => `
  position: absolute;
  overflow: hidden;
  ${position};
  .content {
    position: relative;
    width: 100%;
    height: 100%;
  }
;`;
const renderStyleColor = ({ currentStyles = "", color = "" }) =>
  `background-color: ${styles.getIn(["background", currentStyles, color])};`;

// common style
const StraightLight = styled.div`
  /* animations */
  ${flashing}
  position: absolute;
  width: 100%;
  height: 2%;
  left: 0;
  z-index: 2;
  ${({ positionY }) => positionY};
  ${({ currentStyles, colorName }) =>
    renderStyleColor({ currentStyles, color: `${colorName}Back` })};
  &::before {
    content: "";
    position: absolute;
    width: 95%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${({ currentStyles, colorName }) =>
      renderStyleColor({ currentStyles, color: `${colorName}Front` })};
    animation: flashing 2s linear infinite;
  }
`;
const SquareLight = styled.div`
  /* animations */
  ${flashing}
  position: absolute;
  width: 8%;
  padding-bottom: 8%;
  z-index: 2;
  ${({ position }) => position};
  ${({ currentStyles, colorName }) =>
    renderStyleColor({ currentStyles, color: `${colorName}Back` })};
  &::before {
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
// BuildType1
const StyledBuildType1 = styled.div`
  ${({ position }) => common(position)};
  width: 15%;
  height: 50%;
  ${({ currentStyles }) =>
    renderStyleColor({ currentStyles, color: "buildColor1" })}
  .side-shadow {
    position: absolute;
    width: 25%;
    height: 100%;
    right: 0;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "sideShadow1" })}
  }
`;

export const BuildType1 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType1 position={position} currentStyles={state.currentStyles}>
      <div className="content">
        <div className="side-shadow" />
        {BuildType1List.straightLightList.map((v, k) => {
          return (
            <StraightLight
              key={k}
              positionY={v.positionY}
              currentStyles={state.currentStyles}
              colorName={v.colorName}
            />
          );
        })}
        {BuildType1List.squareLightList.map((v, k) => {
          return (
            <SquareLight
              key={k}
              position={v.position}
              currentStyles={state.currentStyles}
              colorName={v.colorName}
              delay={v.delay}
            />
          );
        })}
      </div>
    </StyledBuildType1>
  );
};
