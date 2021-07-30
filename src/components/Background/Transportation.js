import { useContext } from "react";
import { ReducerContext } from "../Props";
import styled from "styled-components";
import { styles } from "../../constants/styles";
// fetch functions
import { fetchRwdProps } from "../../constants/fetchFuntions";
const StyledCarTypeA = styled.div`
  @keyframes movingA {
    0% {
      left: 0;
    }
    100% {
      left: calc(100% - 28px);
    }
  }
  position: absolute;
  ${({ position }) => position}
  left:0;
  animation: ${({ seconds }) => `movingA ${seconds}s linear infinite`};
  width: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `28px`,
      pad: `28px`,
      mobile: `28px`,
    })};
  height: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `12px`,
      pad: `12px`,
      mobile: `12px`,
    })};
  background-color: ${({ currentStyles, color }) =>
    styles.getIn(["background", currentStyles, color])};
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 60%;
    background: ${({ currentStyles }) =>
      styles.getIn(["background", currentStyles, "carTypelight"])};
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    width: 40%;
    height: 60%;
    background: ${({ currentStyles }) =>
      styles.getIn(["background", currentStyles, "carTypelight"])};
  }
`;
export const CarTypeA = ({ position, seconds, color }) => {
  const [state] = useContext(ReducerContext);
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  return (
    <StyledCarTypeA
      rwd={rwd}
      position={position}
      seconds={seconds}
      color={color}
      currentStyles={state.currentStyles}
    />
  );
};

const StyledCarTypeB = styled.div`
  @keyframes movingB {
    0% {
      right: 0;
    }
    100% {
      right: calc(100% - 28px);
    }
  }
  position: absolute;
  ${({ position }) => position}
  right:0;
  animation: ${({ seconds }) => `movingB ${seconds}s linear infinite`};
  width: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `28px`,
      pad: `28px`,
      mobile: `28px`,
    })};
  height: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `12px`,
      pad: `12px`,
      mobile: `12px`,
    })};
  background-color: ${({ currentStyles, color }) =>
    styles.getIn(["background", currentStyles, color])};
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 60%;
    background: ${({ currentStyles }) =>
      styles.getIn(["background", currentStyles, "carTypelight"])};
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    width: 20%;
    height: 60%;
    background: ${({ currentStyles }) =>
      styles.getIn(["background", currentStyles, "carTypelight"])};
  }
`;
export const CarTypeB = ({ position, seconds, color }) => {
  const [state] = useContext(ReducerContext);
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  return (
    <StyledCarTypeB
      rwd={rwd}
      position={position}
      seconds={seconds}
      color={color}
      currentStyles={state.currentStyles}
    />
  );
};

const StyledZeplin = styled.div`
  @keyframes zeplin {
    0% {
      transform: rotate(0deg) translate(0, 0) scale(1, 1);
    }
    13% {
      transform: rotate(0deg) translate(-2%, 2%);
    }
    26% {
      transform: rotate(2deg) translate(0, 0);
    }
    50% {
      transform: rotate(-2deg) translate(2%, -4%) scale(1.02, 1.02);
    }
    100% {
      transform: rotate(0deg) translate(0, 0);
    }
  }
  position: absolute;
  ${({ position }) => position}
  width: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `270px`,
      pad: `28px`,
      mobile: `28px`,
    })};
  height: ${({ rwd }) =>
    fetchRwdProps({
      state: rwd,
      desktop: `135px`,
      pad: `12px`,
      mobile: `12px`,
    })};
  animation: zeplin 6s linear infinite;
  .zeplin-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .inside-content-part {
      position: relative;
      background-color: ${({ currentStyles }) =>
        styles.getIn(["background", currentStyles, "zeplinColor"])};
    }
    .left {
      width: 8%;
      height: 10%;
      &::before {
        position: absolute;
        content: "";
        border: 5px solid transparent;
        border-bottom-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinColor"])};
        border-right-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinColor"])};
        left: 0;
        top: 0;
        transform: translate(0%, -100%);
        z-index: 2;
      }
      &::after {
        position: absolute;
        content: "";
        border: 5px solid transparent;
        border-top-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinlight"])};
        border-right-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinlight"])};
        left: 0;
        bottom: 0;
        transform: translate(0%, 100%);
        z-index: 2;
      }
      .oar {
        @keyframes oraFlash {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        opacity: 0;
        position: absolute;
        height: 260%;
        width: 32%;
        border-radius: 50%;
        background-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinColor"])};
        &.top {
          top: 0;
          transform: translateY(-100%);
          animation: oraFlash 0.2s infinite linear;
        }
        &.bottom {
          bottom: 0;
          transform: translateY(100%);
          animation: oraFlash 0.2s 0.1s infinite linear;
        }
      }
    }
    .middle {
      width: 80%;
      height: 100%;
      border-radius: 50%;
      &::before {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 80%;
        border-radius: 50%;
        background-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinColor2"])};
        z-index: 1;
      }
      &::after {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 60%;
        border-radius: 50%;
        background-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinColor3"])};
        z-index: 1;
      }
      .zepplin-title {
        @keyframes titleScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 72%;
        height: 45%;
        overflow: hidden;
        z-index: 3;
        .text {
          width: 100%;
          text-align: center;
          font-family: RingMatrix;
          color: ${({ currentStyles }) =>
            styles.getIn(["background", currentStyles, "zeplinlight"])};
          font-size: ${({ rwd }) =>
            fetchRwdProps({
              state: rwd,
              desktop: `30px`,
              pad: `30px`,
              mobile: `30px`,
            })};
          animation: titleScroll 2.5s linear infinite;
        }
      }
      .zepplin-title-border {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 60%;
        border-radius: 5px;
        background-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinColor"])};
        z-index: 2;
        &::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 93%;
          height: 83%;
          border-radius: 5px;
          background-color: ${({ currentStyles }) =>
            styles.getIn(["background", currentStyles, "zeplinlight"])};
          z-index: 1;
        }
        &::after {
          position: absolute;
          content: "";
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          height: 80%;
          border-radius: 5px;
          background-color: ${({ currentStyles }) =>
            styles.getIn(["background", currentStyles, "zeplinColor"])};
          z-index: 2;
        }
      }
      .middle-light {
        position: absolute;
        left: 50%;
        width: 5%;
        height: 8%;
        z-index: 2;
        &.top {
          top: 0;
          transform: translate(-50%, -50%);
          background-color: ${({ currentStyles }) =>
            styles.getIn(["background", currentStyles, "zeplinlight"])};
        }
        &.bottom {
          bottom: 0;
          transform: translate(-50%, 50%);
          background-color: ${({ currentStyles }) =>
            styles.getIn(["background", currentStyles, "zeplinlight2"])};
        }
      }
    }
    .right {
      width: 12%;
      height: 30%;
      &::before {
        position: absolute;
        content: "";
        border: 16px solid transparent;
        border-bottom-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinColor"])};
        border-right-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinColor"])};
        right: 0;
        top: 0;
        transform: translate(50%, -100%);
      }
      &::after {
        position: absolute;
        content: "";
        border: 8px solid transparent;
        border-top-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinlight"])};
        border-right-color: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinlight"])};
        right: 0;
        bottom: 0;
        transform: translate(25%, 100%);
      }
      .right-light {
        position: absolute;
        top: 50%;
        right: 0;
        height: 10%;
        width: 150%;
        transform: translateX(75%);
        background: ${({ currentStyles }) =>
          styles.getIn(["background", currentStyles, "zeplinlight"])};
      }
    }
  }
`;
export const Zeplin = ({ position }) => {
  const [state] = useContext(ReducerContext);
  const rwd = {
    isDesktop: state.isDesktop,
    isTablet: state.isTablet,
    isMobile: state.isMobile,
  };
  return (
    <StyledZeplin
      rwd={rwd}
      position={position}
      currentStyles={state.currentStyles}
    >
      <div className="zeplin-content">
        <div className="inside-content-part left">
          <div className="oar top" />
          <div className="oar bottom" />
        </div>
        <div className="inside-content-part middle">
          <div className="zepplin-title-border" />
          <div className="middle-light top" />
          <div className="middle-light bottom" />
          <div className="zepplin-title">
            <div className="text">welcome formosa</div>
            <div className="text">welcome formosa</div>
          </div>
        </div>
        <div className="inside-content-part right">
          <div className="right-light" />
        </div>
      </div>
    </StyledZeplin>
  );
};
