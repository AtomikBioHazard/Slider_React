import styled, { css } from "styled-components";

const BtN = css`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    path {
      fill: #fff;
    }
  }

  path {
    filter: ${(props) =>
      props.fwd
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }

  ${(props) => (props.fwd ? "right: 0" : "left: 0")}
`;

const Controls = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const MainContainer = styled.div`
  position: relative;
`;

const SlideshowContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  /* max-height: 500px; */
  position: relative;

  img {
    width: 100%;
    vertical-align: top;
  }
`;

const SlideDescription = css`
  background: ${(props) =>
    props.descBgColor ? props.descBgColor : "rgba(0,0,0,.3)"};
  color: ${(props) => (props.descTxtColor ? props.descTxtColor : "#fff")};
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 700px) {
    position: relative;
    background: #000;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export {
  BtN,
  Controls,
  MainContainer,
  SlideshowContainer,
  Slide,
  SlideDescription,
  Title
};
