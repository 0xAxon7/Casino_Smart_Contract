import styled from "styled-components";

export const StyledNFTSection = styled.div`
  width: 100%;

  .button-load-more {
    padding: 0px 20px;
    letter-spacing: 0.5px;
  }

  .nft-cards {
    display: grid;
    width: 100%;
    align-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }

  .btn-wrapper {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 48px 0px;
  }
`;

export const StyledTopSection = styled.div`
  border-radius: 8px;
  background: rgba(203, 215, 255, 0.03);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 24px;
  color: #b1b6c6;

  .content-container {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 16px;
    gap: 16px 32px;
  }

  .item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 4px;
    font-size: 14px;

    .name {
      font-weight: 500;
      font-style: normal;
    }

    .value {
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-style: normal;
    }

    svg {
      fill: currentcolor;
      width: 14px;
      min-width: 14px;
      height: auto;
      margin-left: 4px;
    }
  }
`;
