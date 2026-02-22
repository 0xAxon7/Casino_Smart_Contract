import styled from "styled-components";
import ARROW_HOME from "../../../assets/images/IMAGE (1).png";

export const StyledStepSection = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 1040px;
  padding: 24px 24px 48px;
  color: #b1b6c6;

  .class-1 {
    display: flex;
    justify-content: center;
  }

  .class-2 {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
  }

  .step-account {
    position: relative;
    width: 33.333%;
    padding-bottom: 6.37%;
    background-image: url(${ARROW_HOME});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .step-content {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 40px;
    line-height: 14px;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
  }

  .step-number {
    padding: 0px 8px 0px 48px;
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 10px;
    font-size: 16px;
    font-weight: 800;
    font-style: normal;
  }
`;
