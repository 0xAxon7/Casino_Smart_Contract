import styled from "styled-components";

export const StyleNFTDetails = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 980px;
  padding: 24px 24px 48px;
  color: #b1b6c6;

  svg {
    width: 14px;
    min-width: 14px;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-right: 20px;
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    cursor: pointer;
    color: rgb(255, 176, 24);

    &:hover {
      text-decoration: underline;
    }
  }

  .author {
    display: inline-flex;
    align-items: center;
    margin-right: 12px;
    padding: 8px 12px;
    border-radius: 6px;
    background: rgba(203, 215, 255, 0.03);
    color: rgb(177, 182, 198);
    font-size: 12px;

    font-weight: 700;
    font-style: normal;
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
    white-space: nowrap;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    letter-spacing: 0.5px;
    cursor: pointer;
    user-select: none;
    height: 30px;
    padding: 0px 14px;
    border-radius: 6px;
    font-size: 13px;

    font-weight: 500;
    font-style: normal;
    text-transform: none;
    color: rgb(177, 182, 198);
    background: rgba(203, 215, 255, 0.03);

    &:hover {
      background: rgba(203, 215, 255, 0.055);
    }
  }

  .container-nft {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    gap: 40px;

    .nft-img {
      width: 100%;
      max-width: 400px;

      img {
        display: block;
        border-radius: 6px;
        width: 100%;
      }
    }

    .container-info {
      flex: 1 1 0%;
    }

    .subtitle {
      margin-bottom: 8px;
      color: rgb(255, 176, 24);
      font-size: 14px;

      font-weight: 700;
      font-style: normal;
    }

    .title {
      display: inline-block;
      padding-bottom: 20px;
      color: rgb(255, 255, 255);
      font-size: 32px;

      font-weight: 800;
      font-style: normal;
    }

    .links {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      flex-wrap: wrap;
      padding-bottom: 20px;
    }

    .description {
      margin-bottom: 24px;
      line-height: 1.6;
      white-space: pre-wrap;
      font-size: 14px;

      font-weight: 500;
      font-style: normal;

      .description-text {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .description-button {
        display: flex;
        align-items: center;
        width: 50px;
        margin-top: 12px;

        font-weight: 700;
        font-style: normal;
        cursor: pointer;
        color: rgb(255, 176, 24);

        &:hover {
          text-decoration: underline;
        }
      }

      .open {
        display: flex;
      }
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
      font-size: 14px;
      margin-bottom: 12px;
    }

    .price-gradient {
      height: 16px;
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
      font-size: 18px;
      font-weight: 800;
      font-style: normal;
      margin-top: -4px;
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

    .button-section {
      display: flex;
      width: 100%;
      padding-top: 24px;
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
        font-weight: 900;
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

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .section-title {
    padding: 40px 0px 12px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 800;
    font-style: normal;
  }
`;

export const StyleStats = styled.div`
  border-radius: 8px;
  background: rgba(203, 215, 255, 0.03);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 24px 16px 0px;

  .stat-container {
    min-width: 140px;
    text-align: center;
    margin: 0px 24px 24px 0px;

    .title {
      padding-bottom: 12px;
      color: rgb(177, 182, 198);
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 800;
      font-style: normal;
    }

    .value-container {
      color: rgb(255, 255, 255);
      font-size: 12px;
      font-weight: 700;
      font-style: normal;

      .value {
        width: 100%;
        padding: 3px 0px;
        border-radius: 6px;
        border: 3px solid rgb(26, 29, 41);
        background: linear-gradient(
          90deg,
          rgba(203, 215, 255, 0.075) 0%,
          rgba(203, 215, 255, 0.075) 0%,
          rgb(26, 29, 41) 0%,
          rgb(26, 29, 41) 100%
        );
      }
    }
  }
`;

export const StyleTraits = styled.div`
  display: grid;
  -webkit-box-align: stretch;
  align-items: stretch;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 6px;

  .trait {
    padding: 2px;
    border-radius: 8px;

    .trait-container {
      padding: 10px 14px;
      border-radius: 8px;
      background: rgb(31, 35, 48);
    }

    .title {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      padding-bottom: 8px;

      .text {
        color: rgb(177, 182, 198);
        margin-right: 8px;
        font-size: 12px;
        font-weight: 700;
        font-style: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .value {
      color: rgb(255, 255, 255);
      font-size: 12px;
      font-weight: 700;
      font-style: normal;
    }
  }
`;

export const StyleCollection = styled.div`
  .banner-img {
    display: block;
    margin-bottom: 24px;
    width: 100%;
    border-radius: 8px;
    max-height: 320px;
    object-fit: cover;
  }

  .collection-title {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    padding-bottom: 24px;
    gap: 24px;

    .nft-img {
      position: absolute;
      top: -74px;
      left: 24px;
      display: block;
      min-width: 120px;
      max-width: 120px;
      min-height: 120px;
      max-height: 120px;
      border-radius: 999px;
      background: rgb(39, 43, 56);
      border: 7px solid rgb(26, 29, 41);
      object-fit: cover;
    }

    .collection-name {
      padding-left: 168px;
      color: rgb(255, 255, 255);
      font-size: 32px;
      font-weight: 800;
      font-style: normal;
    }

    @media (max-width: 649px) {
      .nft-img {
        display: none;
      }
      .collection-name {
        padding-left: 0;
      }
    }
  }

  .description {
    padding-bottom: 24px;
    line-height: 1.6;
    white-space: pre-wrap;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
  }
`;
