import styled from "styled-components";

export const StyledTopMatchContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;

  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const StyledTopMatchHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }

  .subtitle {
    color: #b1b6c6;
    font-size: 14px;
    font-weight: 700;
  }

  .timer-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
  }

  .time {
    display: flex;
    width: 241px;
    height: 45px;
    flex-direction: column;
    justify-content: center;

    color: #fff;
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
  }

  .time-text {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    color: #b1b6c6;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const StyledTopMatchContent = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;

  .teams-container {
    display: flex;
    flex-direction: row;
    gap: 8px;

    margin-top: 12px;
  }
`;

export const StyledTeamCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  /* width: 155px; */
  height: 192px;
  padding: 14px 11px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid #2b2e3b;
  background: #2b2e3b;
`;

export const StyledDrawCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 192px;
  padding: 14px 15px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid #2b2e3b;
  background: #2b2e3b;

  .draw-icon {
    display: flex;
    height: 50%;
    align-items: center;

    color: #b1b6c6;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 16.8px;
  }
`;

export const StyledBetsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  .bets-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-height: 32px;
    gap: 8px;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  width: 100px;
  height: 32px;
  padding: 7px 5px;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: end;
  gap: 10px;

  border-radius: 6px;
  border: 1px solid #171924;
  background: #171924;
`;

export const StyledBetButton = styled.button`
  display: flex;
  width: 64px;
  height: 32px;
  padding: 7px 9px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: #2b2e3b;

  &:hover {
    background: #ffe81a;
    color: rgb(23, 25, 36);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.42);
  }

  ${({ isActive }) =>
    isActive &&
    `
    background: #ffe81a;
    color: rgb(23, 25, 36);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.42);
  `}
`;

export const StyledPlaceBetButton = styled.button`
  display: flex;
  width: auto;
  height: 40px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);

  &:hover {
    background: #ffe81a;
    color: rgb(23, 25, 36);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.42);
  }
`;

export const StyledFooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  margin-top: 24px;

  .center-option {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const StyledRoundButton = styled.button`
  display: flex;
  padding: 8px;
  width: 32px;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #2b2e3b;

  &:hover {
    background: rgb(23, 25, 36, 0.9);
  }
`;
