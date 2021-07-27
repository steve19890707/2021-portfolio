import { useContext } from "react";
import { ReducerContext } from "../Props";
import styled from "styled-components";
import { styles } from "../../constants/styles";
import { opacity } from "./Animations";
// fetch functions
import { fetchRwdProps } from "../../constants/fetchFuntions";
// css modules
import {
  BuildType1,
  BuildType2,
  BuildType3,
  BuildType4,
  BuildType5,
  BuildType6,
  BuildType7,
  BuildType8,
} from "./Builds";
const StyledBackground = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  margin: 0 auto;
  width: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `1500px`,
      pad: `100%`,
      mobile: `100%`,
    })};
  min-height: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `1000px`,
    })};
  .background-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .dark-light-cover {
    position: absolute;
    width: 100vw;
    z-index: 3;
    min-width: ${({ rwd }) =>
      fetchRwdProps({
        state: rwd,
        desktop: `1500px`,
        pad: `100%`,
        mobile: `100%`,
      })};
    left: 50%;
    transform: translateX(-50%);
    &.part1 {
      opacity: 0.6;
      bottom: 0;
      height: 2vh;
      background-color: ${({ currentStyles }) =>
        `${styles.getIn(["background", currentStyles, "coverLight"])}`};
    }
    &.part2 {
      opacity: 0.3;
      bottom: 2vh;
      height: 3vh;
      background-color: ${({ currentStyles }) =>
        `${styles.getIn(["background", currentStyles, "coverLight"])}`};
    }
    &.part3 {
      opacity: 0.1;
      bottom: 5vh;
      height: 4vh;
      background-color: ${({ currentStyles }) =>
        `${styles.getIn(["background", currentStyles, "coverLight"])}`};
    }
  }
  .high-light {
    ${opacity}
    position: absolute;
    width: 0.5%;
    background-color: ${({ currentStyles }) =>
      `${styles.getIn(["background", currentStyles, "highLight"])}`};
    animation: "opacity" 4s infinite;
    &.part1 {
      height: 90vh;
      left: 10%;
      bottom: 0;
    }
    &.part2 {
      left: 11%;
      height: 100vh;
      bottom: 0;
    }
    &.part3 {
      right: 8%;
      height: 95vh;
      bottom: 0;
    }
    &.part4 {
      right: 9%;
      height: 100vh;
      bottom: 0;
    }
    &.part5 {
      left: 12%;
      height: 30vh;
      top: 0;
    }
  }
  .min-build {
    position: absolute;
    bottom: 0;
    &.type1 {
      left: 19%;
      width: 2%;
      height: 50%;
      background-color: ${({ currentStyles }) =>
        `${styles.getIn(["background", currentStyles, "buildColor3"])}`};
    }
    &.type2 {
      left: 0%;
      width: 3%;
      height: 40%;
      background-color: ${({ currentStyles }) =>
        `${styles.getIn(["background", currentStyles, "buildColor3"])}`};
    }
    &.type3 {
      right: 0;
      width: 3%;
      height: 28%;
      background-color: ${({ currentStyles }) =>
        `${styles.getIn(["background", currentStyles, "buildColor3"])}`};
    }
    &.type4 {
      left: 29%;
      width: 5%;
      height: 14%;
      z-index: 2;
      background-color: ${({ currentStyles }) =>
        `${styles.getIn(["background", currentStyles, "buildColor1"])}`};
    }
    &.type5 {
      right: 32%;
      width: 5%;
      height: 20%;
      z-index: 2;
      background-color: ${({ currentStyles }) =>
        `${styles.getIn(["background", currentStyles, "sideShadow1"])}`};
    }
  }
`;

export const Background = () => {
  const [state] = useContext(ReducerContext);
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  const highLightList = [`part1`, `part2`, `part3`, `part4`, `part5`];
  const darkLightList = [`part1`, `part2`, `part3`];
  const minBuildList = [`type1`, `type2`, `type3`, `type4`, `type5`];
  return (
    <StyledBackground rwd={{ ...rwd }} currentStyles={state.currentStyles}>
      <div className="background-content">
        {highLightList.map((v, k) => (
          <div key={k} className={`high-light ${v}`} />
        ))}
        {minBuildList.map((v, k) => (
          <div key={k} className={`min-build ${v}`} />
        ))}
        <BuildType7 position={`left:22%;`} />
        <BuildType8 position={`right:32%;`} />
        <BuildType2 position={`right:12%;`} />
        <BuildType3 position={`right:19%;`} />
        <BuildType1 position={`right:4%;`} />
        <BuildType4 position={`left:4%;`} />
        <BuildType5 position={`left:14%;`} />
        <BuildType6 position={`left:50%;`} />
        {darkLightList.map((v, k) => (
          <div key={k} className={`dark-light-cover ${v}`} />
        ))}
      </div>
    </StyledBackground>
  );
};
