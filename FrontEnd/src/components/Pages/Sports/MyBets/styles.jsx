import styled from "styled-components";

export const StyledMyBetsContainer = styled.div`
  padding-top: 24px;
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;

  .bets-content {
    flex: 1;
    padding: 0 16px;
    box-sizing: border-box;
  }
`;

export const StyledFooterSports = styled.div`
  margin: 40px auto 96px;
  z-index: 0;
  max-width: 50%;

  .content {
    display: flex;
    flex-direction: column;
  }

  .odds-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    .label {
      color: #ffffff;
      opacity: 0.5;
      font-size: 12px;
      margin-top: 8px;
      font-weight: 600;
      margin-right: 8px;
      margin-bottom: 8px;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .button-dropdown {
      min-width: 168px;
    }
  }

  .description {
    color: #ffffff;
    opacity: 0.5;
    font-size: 12px;
    margin-top: 16px;
    text-align: center;
    font-weight: 500;
    line-height: 18px;
  }
`;
