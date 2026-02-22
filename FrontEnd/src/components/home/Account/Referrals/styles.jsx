import styled from "styled-components";
import BANNER from "../../../../assets/images/referrals-banner.jpg";

export const StyleReferralBanner = styled.div`
  position: relative;
  margin-bottom: 24px;
  border-radius: 8px;
  background-position: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${BANNER});
  padding: 32px;
  color: #b1b6c6;

  .banner-title {
    max-width: 400px;
    padding-bottom: 4px;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-size: 28px;
    font-weight: 800;
    font-style: normal;
  }

  .content-section {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 16px 64px;
    padding: 24px 0px 32px;
  }

  .text {
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
  }

  .value {
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    font-style: normal;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    user-select: none;
    height: 48px;
    padding: 0px 24px;
    border-radius: 8px;
    font-weight: 800;
    font-style: normal;
    font-size: 14px;
    color: rgb(20, 23, 34);
    background: rgb(134, 244, 84);
    box-shadow: rgba(118, 255, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(59, 198, 14) 0px 0px 15px inset;
  }
`;
