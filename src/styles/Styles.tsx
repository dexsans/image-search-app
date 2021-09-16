import styled from "styled-components";
import { pixelsToVW } from "../utils/Utils";

export const LandingPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${pixelsToVW(320, 320)};
  min-height: ${pixelsToVW(200, 320)};
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  height: 100%;
  
  @media only screen and (min-width: 576px) {
    width: ${pixelsToVW(320, 576)};
    min-height: ${pixelsToVW(200, 576)};
    height: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: ${pixelsToVW(320, 768)};
    min-height: ${pixelsToVW(200, 768)};
    height: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: ${pixelsToVW(320, 992)};
    min-height: ${pixelsToVW(200, 992)};
    height: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: ${pixelsToVW(500)};
    min-height: ${pixelsToVW(305)};
    height: 100%;
  }
`;

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem 0 2rem 0;
`;
