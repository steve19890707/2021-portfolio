import { useContext } from "react";
import { ReducerContext } from "../Props";
import styled from "styled-components";
import { styles } from "../../constants/styles";
// fetch functions
import { fetchRwdProps } from "../../constants/fetchFuntions";
// css modules
import {
  BuildType1,
  BuildType2,
  BuildType3,
  BuildType4,
  BuildType5,
} from "./Builds";
const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  height: 100vh;
  width: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `1300px`,
      pad: `100%`,
      mobile: `100%`,
    })};
  /* background-color: ${({ currentStyles }) =>
    `${styles.getIn(["background", currentStyles, "mainColor"])}`}; */
  .background-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
export const Background = () => {
  const [state] = useContext(ReducerContext);
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  return (
    <StyledBackground rwd={{ ...rwd }} currentStyles={state.currentStyles}>
      <div className="background-content">
        <BuildType2 position={`bottom:0;right:8%;`} />
        <BuildType3 position={`bottom:0;right:17%;`} />
        <BuildType1 position={`bottom:0;right:0;`} />
        <BuildType4 position={`bottom:0;left:0;`} />
        <BuildType5 position={`bottom:0;left:11%;`} />
      </div>
    </StyledBackground>
  );
};
