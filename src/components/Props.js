import React, { createContext, useReducer } from "react";
import device from "current-device";
import { App } from "./App";
const ReducerContext = createContext();
export { ReducerContext };
const initState = {
  currentStyles: "type1",
  isDesktop: device.desktop(),
  isTablet: device.tablet(),
  isMobile: device.mobile(),
};
const todoReducer = (state, action) => {
  const playload = action.playload;
  switch (action.type) {
    case "setCurrentStyles":
      return { ...state, currentStyles: playload };
    default:
      return state;
  }
};
export const Props = () => {
  const reducer = useReducer(todoReducer, initState);
  return (
    <ReducerContext.Provider value={reducer}>
      <App />
    </ReducerContext.Provider>
  );
};
