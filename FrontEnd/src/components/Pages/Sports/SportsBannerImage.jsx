import styled from "styled-components";
import BANNER_IMG from "../../../assets/images/sports-banner-image.png";

export const SportsBannerImage = styled.div`
  background-image: url(${BANNER_IMG});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
