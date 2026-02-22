import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  position: relative;
  background: rgba(203, 215, 255, 0.075);
  border-radius: 8px;

  width: 177px;
  min-width: 177px;
  max-width: 177px;
  height: 286px;
  min-height: 286px;
  max-height: 286px;

  .card-image {
    padding: 12px;
    width: 100%;
    height: auto;
    display: block;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
  }

  .bonus-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    color: #b1b6c6;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
  }

  .bonus-amount {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
  }

  .button {
    align-items: center;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .live-button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    letter-spacing: 0.5px;
    cursor: pointer;
    user-select: none;
    height: 40px;
    border-radius: 8px;
    font-weight: 800;
    font-style: normal;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    background: rgba(203, 215, 255, 0.075);
    margin-top: 16px;
    width: 100%;
    flex-direction: column;
    white-space: normal;
    padding: 0px 12px;
    font-size: 12px;
  }

  .container-information {
    position: relative;
    width: 100%;
    flex: 1 1 0%;
    min-height: 0px;
    display: flex;
    flex-direction: column;
    padding: 0px 16px 16px;
  }

  .pending-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    user-select: none;
    height: 40px;
    border-radius: 8px;
    font-weight: 800;
    font-style: normal;
    color: rgb(20, 23, 34);
    background: rgb(255, 232, 26);
    box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(255, 135, 25) 0px 0px 12px inset;
    margin-top: 16px;
    width: 100%;
    flex-direction: column;
    white-space: normal;
    padding: 0px 12px;
    font-size: 12px;
  }

  .button-text-red {
    color: #ff4949;
    text-align: center;
    margin-left: 4px;
  }

  .button-dot {
    margin-top: 1.5px;
    position: relative;
    bottom: 1.5px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 800;
    font-style: italic;
  }
`;
