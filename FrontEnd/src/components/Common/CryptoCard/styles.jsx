import styled from "styled-components";

export const StyledCryptoCard = styled.div`
  min-width: 130px;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  .padding-wrapper {
    padding-top: 20px;
  }

  .card-wrapper {
    border-radius: 8px;
    width: 127px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(203, 215, 255, 0.03);
    gap: 12px;

    .crypto-image {
      margin-top: 15px;
    }

    .symbol {
      color: #b1b6c6;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
    }

    .value {
      color: #fff;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      margin-top: -5px;
      line-height: 14.4px;
    }

    .percentage {
      color: #ff4949;
      text-align: center;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      margin-top: -5px;
      line-height: 14.4px;
    }

    .leverage-info {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: rgba(15, 17, 26, 0.4);

      .leverage-text {
        color: #b1b6c6;
        text-align: center;
        font-size: 10px;
        padding: 10px 12px;
        font-style: normal;
        font-weight: 400;
        margin-top: -5px;
        line-height: 12px;
      }
    }
  }
`;
