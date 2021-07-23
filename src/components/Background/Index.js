import { useContext } from "react";
import { ReducerContext } from "../Props";
import styled from "styled-components";
import { styles } from "../../constants/styles";
// fetch functions
import { fetchRwdProps } from "../../constants/fetchFuntions";
// css modules
import { BuildType1 } from "./Builds";
const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  min-width: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `800px`,
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
        <BuildType1 position={`bottom:0;right:0;`} />
      </div>
    </StyledBackground>
  );
};
