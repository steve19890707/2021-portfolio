import { useContext } from "react";
import { ReducerContext } from "../Props";
import styled from "styled-components";
import { styles } from "../../constants/styles";
// animations
import { flashing, opacityFont } from "./Animations";
// fetch functions
import { fetchRwdProps } from "../../constants/fetchFuntions";
// light lists
import {
  BuildType1List,
  BuildType2List,
  BuildType3List,
  BuildType4List,
  BuildType5List,
  BuildType6List,
  BuildType7List,
  BuildType8List,
} from "./LightList";
const common = (position) => `
  position: absolute;
  bottom:0;
  ${position};
  .content {
    position: relative;
    width: 100%;
    height: 100%;
  }
;`;
const renderStyleColor = ({ currentStyles = "", color = "" }) =>
  `background-color: ${styles.getIn(["background", currentStyles, color])};`;
const renderFontColor = ({ currentStyles = "", color = "" }) =>
  `color: ${styles.getIn(["background", currentStyles, color])};`;
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
  width: 10px;
  padding-bottom: 10px;
  z-index: 2;
  ${({ position }) => position};
  ${({ currentStyles, colorName, singleColor }) =>
    renderStyleColor({
      currentStyles,
      color: `${singleColor ? colorName : `${colorName}Back`}`,
    })};
  &::before {
    display: ${({ singleColor }) => (singleColor ? `none` : `block`)};
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
              singleColor={v.singleColor}
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
          desktop: `80px`,
          pad: `30px`,
          mobile: `30px`,
        })};
      ${({ currentStyles }) =>
        renderFontColor({ currentStyles, color: "singLight3" })}
      user-select: none;
    }
  }
`;
export const BuildType2 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  return (
    <StyledBuildType2
      rwd={rwd}
      position={position}
      currentStyles={state.currentStyles}
    >
      <div className="content">
        <div className="sing">
          <div className="sing-content">
            <div className="cover" />
            <div className="text">独</div>
          </div>
        </div>
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
export const BuildType3 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  const decorateList = ["type1", "type2", "type3", "type4"];
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
              singleColor={v.singleColor}
              delay={v.delay}
            />
          );
        })}
        <div className="side-decorate" />
        {decorateList.map((v, k) => (
          <div key={k} className={`insdie-decorate ${v}`} />
        ))}
      </div>
    </StyledBuildType3>
  );
};

// BuildType4
const StyledBuildType4 = styled.div`
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
        desktop: `42px`,
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
      top: 15%;
    }
    &-2 {
      right: 11.5%;
      top: 20%;
    }
    &-3 {
      right: 12%;
      top: 25%;
    }
    &-4 {
      right: 11.5%;
      top: 30%;
    }
  }
`;
export const BuildType4 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  const textList = ["H", "O", "T", "E", "L"];
  return (
    <StyledBuildType4
      rwd={rwd}
      position={position}
      currentStyles={state.currentStyles}
    >
      <div className="content">
        <div className="inside-decorate" />
        {textList.map((v, k) => (
          <div key={k} className={`text text-${k}`}>
            {v}
          </div>
        ))}
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
              singleColor={v.singleColor}
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
export const BuildType5 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  const decorateList = ["type1", "type2", "type3", "type4"];
  const textList = ["2", "0", "7", "7"];
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  return (
    <StyledBuildType5
      rwd={rwd}
      position={position}
      currentStyles={state.currentStyles}
    >
      <div className="content">
        {BuildType5List.squareLightList.map((v, k) => {
          return (
            <SquareLight
              key={k}
              position={v.position}
              currentStyles={state.currentStyles}
              colorName={v.colorName}
              singleColor={v.singleColor}
              delay={v.delay}
            />
          );
        })}
        <div className="side-decorate" />
        {textList.map((v, k) => (
          <div key={k} className={`text text-${k}`}>
            {v}
          </div>
        ))}
        {decorateList.map((v, k) => (
          <div key={k} className={`insdie-decorate ${v}`} />
        ))}
        <div className="straight-decorate" />
        <div className="straight-decorate part-2" />
      </div>
    </StyledBuildType5>
  );
};

// BuildType6
const StyledBuildType6 = styled.div`
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
    background-color: red;
    z-index: 2;
    &-1 {
      left: 10%;
      top: 15%;
    }
    &-2 {
      left: 17%;
      top: 15%;
    }
    &-3 {
      left: 24%;
      top: 15%;
    }
    &-4 {
      left: 31%;
      top: 15%;
    }
    &-5 {
      left: 38%;
      top: 15%;
    }
  }
`;
export const BuildType6 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  const decorateList = ["type1", "type2", "type3", "type4"];
  const supportType = [
    "part1",
    "part2",
    "part3",
    "part4",
    "part5",
    "part6",
    "part7",
    "part8",
    "part9",
  ];
  const mainPicture = ["1", "2", "3", "4", "5"];
  const singText = ["フ", "ア", "モ", "サ"];
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  return (
    <StyledBuildType6
      rwd={rwd}
      position={position}
      currentStyles={state.currentStyles}
    >
      <div className="content">
        <div className="sing">
          <div className="sing-content">
            <div className="text-area">
              <div className="inside" />
              {singText.map((v, k) => (
                <div key={k} className={`sing-text`}>
                  {v}
                </div>
              ))}
            </div>
            <div className="support-area">
              {supportType.map((v, k) => (
                <div key={k} className={`support ${v}`} />
              ))}
            </div>
          </div>
        </div>
        {mainPicture.map((v, k) => (
          <div key={k} className={`main-picture main-picture-${v}`} />
        ))}
        {BuildType6List.squareLightList.map((v, k) => {
          return (
            <SquareLight
              key={k}
              position={v.position}
              currentStyles={state.currentStyles}
              colorName={v.colorName}
              singleColor={v.singleColor}
              delay={v.delay}
            />
          );
        })}
        {decorateList.map((v, k) => (
          <div key={k} className={`insdie-decorate ${v}`} />
        ))}
        <div className="floor-top" />
        <div className="floor-bottom" />
      </div>
    </StyledBuildType6>
  );
};

// BuildType7
const StyledBuildType7 = styled.div`
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
          desktop: `45px`,
          pad: `30px`,
          mobile: `30px`,
        })};
      ${({ currentStyles }) =>
        renderFontColor({ currentStyles, color: "singLight1" })}
      user-select: none;
    }
  }
`;
const StyledAnimeSpan = styled.span`
  animation: ${({ delay }) => `"opacityFont" 0.8s ${delay}s infinite;`};
`;
export const BuildType7 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  const decorateList = ["type1", "type2", "type3"];
  const singDecorateList = ["part1", "part2", "part3", "part4"];
  const gamesList = ["G", "A", "M", "E", "S"];
  const storeList = ["S", "T", "O", "R", "E"];
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  return (
    <StyledBuildType7
      rwd={rwd}
      position={position}
      currentStyles={state.currentStyles}
    >
      <div className="content">
        <div className="sing">
          {singDecorateList.map((v, k) => (
            <div key={k} className={`triangle ${v}`} />
          ))}
          <div className="sing-title">
            <div>
              {gamesList.map((v, k) => (
                <StyledAnimeSpan delay={`0.${k}`} key={k}>
                  {v}
                </StyledAnimeSpan>
              ))}
            </div>
            <div>
              {storeList.map((v, k) => (
                <StyledAnimeSpan delay={`0.${k + 5}`} key={k}>
                  {v}
                </StyledAnimeSpan>
              ))}
            </div>
          </div>
        </div>
        <div className="side-decorate" />
        {decorateList.map((v, k) => {
          return (
            <div key={k} className={`insdie-decorate-part ${v}`}>
              <div className="content">
                <div className="top-part" />
                <div className="other-light" />
                <div className="other-light up" />
                {BuildType7List.squareLightList.map((v, k) => {
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
            </div>
          );
        })}
      </div>
    </StyledBuildType7>
  );
};

// BuildType8
const StyledBuildType8 = styled.div`
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
export const BuildType8 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType8 position={position} currentStyles={state.currentStyles}>
      <div className="content">
        <div className="floor-top">
          {BuildType8List.straightLightList.map((v, k) => {
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
        <div className="floor-middle" />
        <div className="floor-bottom" />
      </div>
    </StyledBuildType8>
  );
};

// BuildType9
const StyledBuildType9 = styled.div``;
export const BuildType9 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  return (
    <StyledBuildType9 position={position} currentStyles={state.currentStyles}>
      <div className="content"></div>
    </StyledBuildType9>
  );
};
