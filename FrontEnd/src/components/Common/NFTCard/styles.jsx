import styled from "styled-components";
import {
  fadeAndSlideIn,
  generateAnimationDelayCSS,
} from "../HoverableImage/styles";

export const StyledNFTCard = styled.div`
  animation: 0.2s ease-out 0s 1 normal backwards running ${fadeAndSlideIn};
  ${generateAnimationDelayCSS(3, 0.02, 100)}

  border-radius: 8px;
  width: ${(props) => (props.isSliderElement ? "214.8px" : "100%")};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(203, 215, 255, 0.03);
  gap: 12px;
  padding: 16px;

  .text-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 6px;

    .title {
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 800;
      font-style: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .sub-title {
      color: rgb(177, 182, 198);
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      .amount {
        display: inline-block;
      }
    }
  }

  .image-section {
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .info-section {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 5px;

    .info-text {
      color: #fff;
      text-align: center;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      gap: 5px;

      img {
        width: 18px;
        height: 18px;
      }

      .info-name {
        display: inline-block;
      }

      .item-count {
        color: #b1b6c6;
      }
    }
  }
  .name-img {
    display: flex;
    gap: 6px;
  }

  .prices-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .prices {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 15px;
    color: rgb(177, 182, 198);
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    margin-bottom: 6px;
  }

  .gradient-price {
    height: 4px;
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      rgb(114, 242, 56) 0%,
      rgb(255, 176, 24) 50%,
      rgb(255, 73, 73) 100%
    );
  }

  .arrow-current-price {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: rgb(255, 255, 255);
    width: 56px;
    font-weight: 800;
    font-style: normal;
    gap: 8px;

    svg {
      transform: rotate(180deg);
      margin-bottom: -5px;
      filter: drop-shadow(rgb(16, 18, 27) 0px 0px 1px);

      width: 12px;
      min-width: 12px;
      height: auto;
    }
  }

  .img-percentage-text {
    position: absolute;
    bottom: 4px;
    left: 4px;

    .percentage-text {
      display: inline-block;
      padding: 3px 5px;
      background: rgb(31, 33, 46);
      border-radius: 4px;
      color: rgb(255, 255, 255);
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
    }
  }

  .button-section {
    display: flex;
    width: 100%;
    gap: 14px;

    button {
      padding: 0px 20px;
      width: 100%;
      height: 40px;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      background: #ffe81a;
      box-shadow: 0px 0px 10px 0px rgba(255, 176, 25, 0.4);
      color: #141722;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;

      &:hover {
        filter: brightness(110%);
      }
    }

    .buy {
      background: rgb(134, 244, 84);
      box-shadow: rgba(118, 255, 25, 0.4) 0px 0px 10px,
        rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
        rgb(59, 198, 14) 0px 0px 12px inset;
    }

    .bet {
      background: rgb(255, 232, 26);
      box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
        rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
        rgb(255, 135, 25) 0px 0px 12px inset;
    }
  }
`;

export const StyledNFTSection = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px 6px;

  width: 100%;
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(214.8px, 1fr));
    gap: 18px 12px;
  }
`;
