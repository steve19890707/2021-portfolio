import { useContext } from "react";
import { ReducerContext } from "./Props";
import styled, { createGlobalStyle } from "styled-components";
import { styles } from "../constants/styles";
// components
import { Background } from "./Background/Index";
const StyledApp = styled.div`
  position: fixed;
  z-index: 2;
`;
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${({ currentStyles }) =>
      `${styles.getIn(["background", currentStyles, "mainColor"])}`} ;
    font-family: "PingFangSC-Regular";
  }
  @font-face {
    font-family: RingMatrix;
    src: url("./2021-portfolio/fonts/RingMatrix.ttf")format('truetype');
  }
  @font-face {
    font-family: FR73Pixel;
    src: url("./2021-portfolio/fonts/FR73Pixel.ttf")format('truetype');
  }
`;
export const App = () => {
  const [state] = useContext(ReducerContext);
  return (
    <>
      <GlobalStyle currentStyles={state.currentStyles} />
      <StyledApp></StyledApp>
      <Background />
    </>
  );
};
