import styled from "styled-components";

import BANNER_IMG from "../../../assets/images/sports-banner-image.png";

export const StyledSportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SportsBannerImage = styled.div`
  background-image: url(${BANNER_IMG});
  background-repeat: no-repeat;
  background-size: 100% 100%; /* Adjusted background size */
  width: 100%;
  height: 290px;
  border-radius: 8px;
`;
