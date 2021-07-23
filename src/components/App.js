import { useContext } from "react";
import { ReducerContext } from "./Props";
import styled, { createGlobalStyle } from "styled-components";
import { styles } from "../constants/styles";
// components
import { Background } from "./Background/Index";
const StyledApp = styled.div`
  position: relative;
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
`;
export const App = () => {
  const [state] = useContext(ReducerContext);
  return (
    <>
      <GlobalStyle currentStyles={state.currentStyles} />
      <StyledApp>Hello</StyledApp>
      <Background />
    </>
  );
};
