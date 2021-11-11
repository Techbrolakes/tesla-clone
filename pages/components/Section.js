import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftBthText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <Fade bottom>
          <h1>{title}</h1>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <Buttons>
        <Fade left>
          <ButtonGroup>
            <LeftButton>{leftBthText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  height: 40px;
  cursor: pointer;
  border-radius: 100px;
  opacity: 0.85;
  width: 256px;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 8px;
  transition: all 0.4s ease-in;
  :hover {
    background-color: #dc2730;
    opacity: 0.8;
  }
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  text-align: center;
`;
