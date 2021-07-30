import { useContext } from "react";
import { ReducerContext } from "../../Props";
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
} from "../LightList";
// styled
import { StyledBuildType1 } from "./StyledBuildType1";
import { StyledBuildType2 } from "./StyledBuildType2";
import { StyledBuildType3 } from "./StyledBuildType3";
import { StyledBuildType4 } from "./StyledBuildType4";
import { StyledBuildType5 } from "./StyledBuildType5";
import { StyledBuildType6 } from "./StyledBuildType6";
import { StyledBuildType7, StyledAnimeSpan } from "./StyledBuildType7";
import { StyledBuildType8 } from "./StyledBuildType8";
import { StraightLight, SquareLight } from "./StyledCommon";

// BuildType1
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
export const BuildType6 = ({ position }) => {
  const [state] = useContext(ReducerContext);
  const decorateList = ["type1", "type2", "type3", "type4"];
  const supportType = [];
  const mainPicture = [];
  for (let i = 1; i <= 40; i++) {
    if (i < 10) {
      supportType.push(`part${i}`);
    }
    mainPicture.push(i);
  }
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
// const StyledBuildType9 = styled.div``;
// export const BuildType9 = ({ position }) => {
//   const [state] = useContext(ReducerContext);
//   return (
//     <StyledBuildType9 position={position} currentStyles={state.currentStyles}>
//       <div className="content"></div>
//     </StyledBuildType9>
//   );
// };
