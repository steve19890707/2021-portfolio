import { useContext } from "react";
import { ReducerContext } from "../Props";
import styled from "styled-components";
import { styles } from "../../constants/styles";
// animations
import { flashing } from "./Animations";
// light lists
import {
  BuildType1List,
  BuildType2List,
  BuildType3List,
  BuildType4List,
  BuildType5List,
} from "./LightList";
const common = (position) => `
  position: absolute;
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
const SquareLight = styled.div`
  /* animations */
  ${flashing}
  position: absolute;
  width: 7%;
  padding-bottom: 7%;
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
      left: 32%;
      width: 150%;
      padding-bottom: 150%;
      transform-origin: center;
      transform: translate(0%, -50%) rotate(45deg);
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "buildColor1" })}
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

export const BuildType1 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType1 position={position} currentStyles={state.currentStyles}>
      <div className="content">
        <div className="side-decorate" />
        <div className="side-shadow" />
        {BuildType1List.straightLightList.map((v, k) => {
          return (
            <StraightLight
              key={k}
              width={v.width}
              hight={v.hight}
              position={v.position}
              currentStyles={state.currentStyles}
              colorName={v.colorName}
              delay={v.delay}
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

// BuildType2
const StyledBuildType2 = styled.div`
  ${({ position }) => common(position)};
  width: 20%;
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
`;
export const BuildType2 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType2 position={position} currentStyles={state.currentStyles}>
      <div className="content">
        <div className="floor-top" />
        <div className="floor-middle" />
        <div className="floor-bottom" />
        {BuildType2List.straightLightList.map((v, k) => {
          return (
            <StraightLight
              key={k}
              nodisplay={v.nodisplay}
              width={v.width}
              hight={v.hight}
              position={v.position}
              currentStyles={state.currentStyles}
              colorName={v.colorName}
              delay={v.delay}
            />
          );
        })}
      </div>
    </StyledBuildType2>
  );
};

// BuildType3
const StyledBuildType3 = styled.div`
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
    width: 85.5%;
    height: 6%;
    ${({ currentStyles }) =>
      renderStyleColor({ currentStyles, color: "sideShadow1" })}
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, 25%) rotate(-45deg);
      width: 25%;
      padding-bottom: 25%;
      ${({ currentStyles }) =>
        renderStyleColor({ currentStyles, color: "sideShadow1" })}
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
export const BuildType3 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType3 position={position} currentStyles={state.currentStyles}>
      <div className="content">
        {BuildType3List.squareLightList.map((v, k) => {
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
        <div className="side-decorate" />
        <div className="insdie-decorate type1" />
        <div className="insdie-decorate type2" />
        <div className="insdie-decorate type3" />
        <div className="insdie-decorate type4" />
      </div>
    </StyledBuildType3>
  );
};

// BuildType4
const StyledBuildType4 = styled.div`
  ${({ position }) => common(position)};
  width: 16%;
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
`;
export const BuildType4 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType4 position={position} currentStyles={state.currentStyles}>
      <div className="content">
        <div className="inside-decorate" />
        {BuildType4List.straightLightList.map((v, k) => {
          return (
            <StraightLight
              key={k}
              nodisplay={v.nodisplay}
              width={v.width}
              hight={v.hight}
              position={v.position}
              currentStyles={state.currentStyles}
              colorName={v.colorName}
              delay={v.delay}
            />
          );
        })}
        {BuildType4List.squareLightList.map((v, k) => {
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
    </StyledBuildType4>
  );
};

// BuildType5
const StyledBuildType5 = styled.div`
  ${({ position }) => common(position)};
  width: 15%;
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
`;
export const BuildType5 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType5 position={position} currentStyles={state.currentStyles}>
      <div className="content">
        {BuildType5List.squareLightList.map((v, k) => {
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
        <div className="side-decorate" />
        <div className="insdie-decorate type1" />
        <div className="insdie-decorate type2" />
        <div className="insdie-decorate type3" />
        <div className="insdie-decorate type4" />
      </div>
    </StyledBuildType5>
  );
};

// BuildType6
const StyledBuildType6 = styled.div``;
export const BuildType6 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType6 position={position} currentStyles={state.currentStyles}>
      <div className="content"></div>
    </StyledBuildType6>
  );
};
