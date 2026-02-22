import styled from "styled-components";

export const StyledSportCard = styled.div`
  display: flex;
  max-width: 100%;
  padding: 9px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid #212532;
  background: #212532;

  .card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  .card-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .playing-teams {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0 12px 8px;
    width: 100%;
  }

  .card-footer {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    height: 40px;
  }

  .btn-sport {
    display: flex;
    width: 100%;
    height: 40px;
    padding: 0 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    border-radius: 8px;
    border: 1px solid #2b2e3b;
    background: #2b2e3b;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: #fff;
      cursor: pointer;
      background: rgba(43, 46, 59, 0.7);
      border-color: rgba(43, 46, 59, 0.7);
    }
  }

  .text-btn {
    width: 100%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    line-height: 1.2;
    height: 1.2em;
    overflow: hidden;
    word-break: break-all;
    box-sizing: border-box;

    -webkit-mask-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .number-btn {
    color: rgba(255, 255, 255, 1);
    display: flex;
    font-size: 12px;
    align-items: center;
    line-height: 1.2;
  }

  .team-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .team-name {
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex: 1;

    .name {
      color: #fff;
      width: 100%;
      display: inline-block;
      overflow: hidden;
      box-sizing: border-box;
      word-break: break-all;
      vertical-align: middle;
    }
  }

  .team-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  .team-score {
    color: rgb(255, 255, 255);
    min-width: 32px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    height: 24px;
    display: flex;
    padding: 4px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    align-items: center;
    font-weight: 600;
    line-height: 16px;
    border-radius: 8px;
    justify-content: center;
  }

  .team-options {
    display: flex;
    width: 100%;
    gap: 8px;
  }

  .dropdown-btn {
    height: inherit;
    width: 32px;
    margin-left: 0;
    color: #b1b6c6;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #fff;
      cursor: pointer;
      background: rgba(43, 46, 59, 0.7);
      border-color: rgba(43, 46, 59, 0.7);
    }
  }
`;

export const StyledLeagueInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .icon-text-container {
    display: flex;
    align-items: center;
    gap: 6px;

    color: rgba(255, 255, 255, 0.5);
    height: 16px;
    font-size: 12px;
    align-items: center;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;

    &:hover {
      transition: color 0s ease 0s, opacity 0.3s ease 0s;
      cursor: pointer;
      color: rgb(255, 255, 255) !important;

      .header-text {
        color: rgb(255, 255, 255) !important;
      }
    }
  }

  .header-text {
    height: 16px;
    display: flex;
    overflow: hidden;
    font-size: inherit;
    word-break: break-all;
    align-items: center;
    line-height: 16px;
    letter-spacing: 0.03em;
    gap: 2px;

    color: rgba(255, 255, 255, 0.5);
  }
`;

export const StyledCardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding-left: 8px;

  .date-text {
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    white-space: nowrap;
    letter-spacing: 0.24px;
    vertical-align: middle;
    color: rgba(255, 255, 255, 0.5);
  }
`;
