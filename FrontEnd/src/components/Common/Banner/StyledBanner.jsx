import styled from "styled-components";
import BANNER_IMG from "../../../assets/images/banner-image.png";

export const StyledBanner = styled.div`
  background-image: url(${BANNER_IMG});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 0px 36px 3.5%;
    gap: 1.5rem;
  }

  .main-heading {
    max-width: 368px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
  }

  .or-join-with {
    width: 73px;
    color: #b1b6c6;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }

  .social-media-container {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .side-text {
    padding: 36px 7.5% 36px 0;
    align-self: flex-end;
  }

  .leverage-text {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }

  .small-text {
    color: #b1b6c6;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
  }
`;
